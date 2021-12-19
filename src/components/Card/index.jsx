import styles from './Card.module.scss';

const Card = ({ title, price, img, addToCart, isCartAdded, addToFavorite, isFavoriteAdded }) => {
  const handleClickAdd = () => {
    addToCart();
  };
  const handleClickFavorite = () => {
    addToFavorite();
  };

  return (
    <div className={styles.card}>
      <img
        className={styles.favoriteIcon}
        onClick={handleClickFavorite}
        src={isFavoriteAdded ? '/img/hearthov.svg' : '/img/heart.svg'}
        alt="addtofavorite"
      />
      <div className={styles.cardInner}>
        <img width={133} height={112} src={img} alt="yeezy-item" />
        <p>{title}</p>
        <div className={styles.price}>
          <div className={styles.priceInner}>
            <p>ЦЕНА:</p>
            <b>{price} руб.</b>
          </div>
          <img
            onClick={handleClickAdd}
            src={isCartAdded ? '/img/added.svg' : '/img/add.svg'}
            alt="add to cart"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
