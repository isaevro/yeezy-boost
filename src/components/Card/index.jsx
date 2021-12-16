import { useState } from 'react';
import styles from './Card.module.scss'

const Card = (props) => {
	const [isAdded, setIsAdded] = useState(true)



	return (
		<div className={styles.card}>
			<img className={styles.favoriteIcon} src="/img/heart.svg" alt="addtofavorite" />
			<div className={styles.cardInner}>
				<img width={133} height={112} src={props.img} alt="yeezy-item" />
				<p>{props.title}</p>
				<div className={styles.price}>
					<div className={styles.priceInner}>
						<p>ЦЕНА:</p>
						<b>{props.price} руб.</b>
					</div>
					<img onClick={() => setIsAdded(!isAdded)}
						src={isAdded ? '/img/add.svg' : '/img/added.svg'} alt="add to cart" />

				</div>
			</div>
		</div>
	);
}

export default Card;
