import React from 'react';
import "./styles.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='title'>Your Receipt</div>
      <div className='receipt'>
        <div className='receipt_item'></div>
        <div className='receipt_item_amount'>x</div>
        <div className='receipt_item_const'>$</div>
      </div>
    </div>
  );
};

export default Footer;