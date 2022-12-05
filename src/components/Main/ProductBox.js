import React from 'react';

const ProductBox = ({ item }) => {
  return (
    <div className='item_wrapper'>
      <img src={item.image} alt={item.name} />
      <div className='item_name'> {item.name} </div>
      <div className='item_const'>$ {item.price} </div>
      <div className='item_controls'>
        <button className='item_sell'>Sell</button>
        <input type='number' className='item_count' value={item.count} />
        <button className='item_buy'>Buy</button>
      </div>
    </div>
  );
};

export default ProductBox;
