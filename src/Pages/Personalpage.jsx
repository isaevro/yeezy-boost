import Card from '../components/Card';

const Personal = ({ myPurchases }) => {
  const fullSum = () => {
    let res = myPurchases
      .map((e) => e.price.split(' ').join(''))
      .reduce((sum, cur) => sum + +cur, 0);
    res = res.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    return res;
  };
  return (
    <>
      <div className="container">
        <div className="title">
          <h1>мои покупки</h1>
        </div>
        <div style={{ marginBottom: '50px' }}>
          сумма всех ваших покупок без учета скидок: <b>{fullSum()}</b> руб.
        </div>
        {myPurchases.length === 0 && (
          <div className="no-items">
            <img width={70} height={70} src="/img/smilesad.png" alt="" />{' '}
            <h2>Здесь пока ничего нет :(</h2>
            <p>вы ничего не купили</p>
          </div>
        )}

        <div className="cards" id="personal-card">
          {myPurchases.map((item, i) => (
            <Card key={i} title={item.title} price={item.price} img={item.imgURL} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Personal;
