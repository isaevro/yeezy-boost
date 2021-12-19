import React from 'react';
import Card from '../components/Card';

const Favoritepage = ({ cartItems, addToCart, addToFavorite, favoriteItems }) => {
  return (
    <>
      <div className="container">
        <div className="title">
          <h1>избранное</h1>
        </div>
        <div className="cards">
          {favoriteItems.map((item) => (
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
    </>
  );
};

export default Favoritepage;
