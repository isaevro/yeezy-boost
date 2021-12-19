import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Header from './components/Header';
import Favoritepage from './Pages/Favoritepage';
import Homepage from './Pages/Homepage';

const localCart = JSON.parse(localStorage.getItem('cart')) || [];
const localFavorite = JSON.parse(localStorage.getItem('favorites')) || [];

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState(localCart);
  const [favoriteItems, setFavoriteItems] = useState(localFavorite);
  const [searchValue, setSearchValue] = useState('');

  const addToCart = (obj) => {
    if (cartItems.filter((e) => e.id !== obj.id).length === cartItems.length) {
      setCartItems((prev) => [...prev, obj]);
    } else {
      setCartItems(cartItems.filter((e) => e.id !== obj.id));
    }
  };
  const addToFavorite = (obj) => {
    if (favoriteItems.filter((e) => e.id !== obj.id).length === favoriteItems.length) {
      setFavoriteItems((prev) => [...prev, obj]);
    } else {
      setFavoriteItems(favoriteItems.filter((e) => e.id !== obj.id));
    }
  };
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  useEffect(() => {
    axios
      .get('https://61bb7bc9e943920017784ee6.mockapi.io/yeezy')
      .then((res) => setItems(res.data));
  }, []);

  const handleInput = (e) => {
    setSearchValue(e.target.value);
  };

  const handleRemoveCartItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCartClose = () => {
    setCartOpen(!cartOpen);
  };
  const price = () => {
    let res = cartItems.map((e) => e.price.split(' ').join('')).reduce((sum, cur) => sum + +cur, 0);
    return res;
  };
  console.log('render');
  return (
    <div className="App">
      <Header open={handleCartClose} price={price()} />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              items={items}
              searchValue={searchValue}
              handleInput={handleInput}
              cartItems={cartItems}
              addToCart={addToCart}
              favoriteItems={favoriteItems}
              addToFavorite={addToFavorite}
            />
          }
        />

        <Route
          path="/favorites"
          element={
            <Favoritepage
              cartItems={cartItems}
              addToCart={addToCart}
              favoriteItems={favoriteItems}
              addToFavorite={addToFavorite}
            />
          }
        />
      </Routes>

      {cartOpen ? (
        <Cart
          price={price()}
          cartItems={cartItems}
          handleRemoveCartItem={handleRemoveCartItem}
          close={handleCartClose}
        />
      ) : null}
    </div>
  );
}

export default App;
