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


	const addToCart = (obj) => {
		setCartItems(prev => ([...prev, obj]))

	}
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cartItems))
		console.log(localStorage.getItem('cart'))
	}, [cartItems])

	useEffect(() => {
		axios.get('https://61bb7bc9e943920017784ee6.mockapi.io/yeezy')
			.then(res => setItems(res.data))
	}, [])

	return (
		<div className="App">

			<Header close={() => setCartOpen(true)} />
			<div className="content">
				<div className="container">
					<div className="title">
						<h1>Все кроссовки</h1>
						<div className="search">
							<img src="/img/search.svg" alt="search" />
							<input type="text" placeholder="Поиск..." />
						</div>
					</div>
					<div className="cards">
						{items.map(item => (
							<Card
								key={item.id}
								title={item.title}
								price={item.price}
								img={item.imgURL}
								addToCart={() => addToCart(item)}
							/>
						))}
					</div>
				</div>
				{cartOpen ?
					<Cart cartItems={cartItems} close={() => setCartOpen(false)}
					/>
					: null}
			</div>
		</div>
	);
}

export default App;
