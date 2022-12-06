import React from 'react';
import elon from '../../assets/elon.jpg';
import "./styles.scss";
import { moneySelector } from '../../redux/productsSlice';
import { useSelector } from 'react-redux';

const Header = () => {
  const currentMoney = useSelector(moneySelector);

  return (
    <>
      <div className='profile'>
        <img src={elon} alt='Elon' />
        <h2 className='text-center fw-bold'>Spend Elon Musk's Money</h2>
      </div>
      <div className='money_box'>
        ${currentMoney ? currentMoney.toLocaleString() : 0}
      </div>
    </>
  );
};

export default Header;