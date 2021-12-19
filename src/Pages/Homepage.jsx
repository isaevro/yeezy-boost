import React from 'react';
import Card from '../components/Card';

const Homepage = ({
  items,
  searchValue,
  handleInput,
  cartItems,
  addToCart,
  addToFavorite,
  favoriteItems,
}) => {
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="title">
            <h1>{searchValue ? `поиск по ${searchValue}` : 'все кроссовки'}</h1>

            <div className="search">
              <img src="/img/search.svg" alt="search" />
              <input
                type="text"
                onChange={handleInput}
                value={searchValue}
                placeholder="Поиск..."
              />
            </div>
          </div>
          <div className="cards">
            {items
              .filter((e) => e.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  img={item.imgURL}
                  isCartAdded={cartItems.map((e) => e.id).includes(item.id)}
                  addToCart={() => addToCart(item)}
                  addToFavorite={() => addToFavorite(item)}
                  isFavoriteAdded={favoriteItems.map((e) => e.id).includes(item.id)}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
