import { Link } from 'react-router-dom';

export const EmptyCart = () => {
  return (
    <div className='emptyCart'>
      <h2>
        Cart is empty <span>😕</span>
      </h2>
      <p>
        Maybe you haven't ordered pizza yet
        <br />
        To order a pizza, go to the home page
      </p>
      <Link to='/'>
        <button className='button black'>Go home</button>
      </Link>
    </div>
  );
};
