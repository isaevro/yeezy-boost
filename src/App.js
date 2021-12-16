import Card from "./components/Card";
import Cart from "./components/Cart";
import Header from "./components/Header";

const items = [
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: '12 999',
		imgURL: '/img/sneakers/image 5-1.jpg'
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		price: '9 999',
		imgURL: '/img/sneakers/image 5-2.jpg'
	},
	{
		title: 'Мужские Кроссовки Nike Blazer Top Suede',
		price: '11 999',
		imgURL: '/img/sneakers/image 5-3.jpg'
	},
	{
		title: 'Кроссовки Puma X Aka Boku Future Rider',
		price: '10 999',
		imgURL: "/img/sneakers/image 5.jpg"
	},
	{
		title: 'Кроссовки Puma X Aka Boku Future Rider',
		price: '10 999',
		imgURL: "/img/sneakers/image 5.jpg"
	},
	{
		title: 'Кроссовки Puma X Aka Boku Future Rider',
		price: '10 999',
		imgURL: "/img/sneakers/image 5.jpg"
	},
]


function App() {
	return (
		<div className="App">
			<Header />
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
								title={item.title}
								price={item.price}
								img={item.imgURL}
							/>
						))}
					</div>
				</div>

			</div>
			<Cart />
		</div>
	);
}

export default App;
