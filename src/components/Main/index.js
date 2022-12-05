import React from 'react';
import { useSelector } from 'react-redux';
import { productsSelector } from '../../redux/productsSlice';
import ProductBox from './ProductBox';
import "./styles.scss";

const Main = () => {
  const items = useSelector(productsSelector);


  return (
    <div className='card_container'>
      {items.map((item) => (
        <ProductBox key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Main;