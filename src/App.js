import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Header from "./components/Header";

const localCart = JSON.parse(localStorage.getItem('cart')) || [];

function App() {

	const [cartOpen, setCartOpen] = useState(false)
	const [items, setItems] = useState([])
	const [cartItems, setCartItems] = useState(localCart)
	const [searchValue, setSearchValue] = useState('')


	const addToCart = (obj) => {
		if (cartItems.filter(e => e.id !== obj.id).length === cartItems.length) {
			setCartItems(prev => ([...prev, obj]))
		}
		else {
			setCartItems(cartItems.filter(e => e.id !== obj.id))
		}

	}
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cartItems))
	}, [cartItems])

	useEffect(() => {
		axios.get('https://61bb7bc9e943920017784ee6.mockapi.io/yeezy')
			.then(res => setItems(res.data))
	}, [])

	const handleInput = (e) => {
		setSearchValue(e.target.value)
	}

	const handleRemoveCartItem = (id) => {
		setCartItems(prev => (prev.filter(item => item.id !== id)))
	}

	return (
		<div className="App">

			<Header close={() => setCartOpen(true)} />
			<div className="content">
				<div className="container">
					<div className="title">
						<h1>{searchValue ? `поиск по ${searchValue}` : 'все кроссовки'}</h1>
						<div className="search">
							<img src="/img/search.svg" alt="search" />
							<input type="text" onChange={handleInput} value={searchValue} placeholder="Поиск..." />
						</div>
					</div>
					<div className="cards">
						{items
							.filter(e => e.title.toLowerCase().includes(searchValue.toLowerCase()))
							.map(item => (
								<Card
									key={item.id}
									title={item.title}
									price={item.price}
									img={item.imgURL}
									isKek={item.id === 9}
									addToCart={() => addToCart(item)}
								/>
							))}
					</div>
				</div>
				{cartOpen ?
					<Cart cartItems={cartItems} handleRemoveCartItem={handleRemoveCartItem} close={() => setCartOpen(false)}
					/>
					: null}
			</div>
		</div>
	);
}

export default App;
