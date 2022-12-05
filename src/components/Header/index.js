import React from 'react';
import elon from '../../assets/elon.jpg';
import "./styles.scss";
import { moneySelector } from '../../redux/productsSlice';
import { useSelector } from 'react-redux';

const Header = () => {
  const money = useSelector(moneySelector);

  return (
    <div className='header'>
      <div className='bg-light px-3 py-4 mb-2'>
        <img src={elon} alt='Elon' />
        <h2 className='text-center fw-bold'>Spend Elon Musk's Money</h2>
      </div>
      <div className='money_box'>
        $ {money ? money.toLocaleString() : 0}
      </div>
    </div>
  );
};

export default Header;