import React from 'react';

const Cart = ({ close, cartItems, handleRemoveCartItem }) => {
	return (
		<div className="sidebar-wrapper" style={{ display: 'block' }} >
			<div className="sidebar">
				<div className="sidebar-title">
					<h2>Корзина</h2>
					<img onClick={close} className="close-cart" src="/img/close.svg" alt="close" />
				</div>
				<div className="sidebar-top">
					<div className="card-side-items">

						{cartItems.map((item) => (
							<div className="card-side-item">
								<div className="card-side-item-inner">
									<img width={70} height={70} className="sidebar-pic" src={item.imgURL} alt="yeezy-item" />
									<div className="card-side-descr">
										<p>{item.title}</p>
										<b>{item.price} руб.</b>
									</div>
									<img onClick={() => handleRemoveCartItem(item.id)} className="close-pic" src="/img/close.svg" alt="close" />
								</div>

							</div>


						))}

					</div>
				</div>
				<div className="sidebar-bottom">
					<div className="sidebar-price">
						<p>Итого:</p>
						<div></div>
						<b>12999 руб.</b>
					</div>
					<div className="sidebar-price">
						<p>Tax 18%:</p>
						<div></div>
						<b>2777 руб.</b>
					</div>
					<button className="sidebar-submit">
						Оформить заказ
						<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 7H14.7143" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>

					</button>
				</div>

			</div>
		</div >
	);
}

export default Cart;
