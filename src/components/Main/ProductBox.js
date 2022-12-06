import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { moneySelector, updateMoney } from "../../redux/productsSlice";

const ProductBox = ({ item }) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const money = useSelector(moneySelector);

  useEffect(() => {
    dispatch(updateMoney({ item: item.id, count }));
  }, [count, dispatch, item.id]);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    const max = Math.floor(money / item.price) + count;

    if (value && value > 0) {
      if (value > max && money >= 0) {
        setCount(max);
      } else {
        setCount(value);
      }
    } else {
      setCount(0);
    }
  };

  return (
    <div className="item_wrapper">
      <img src={item.image} alt={item.name} />
      <div className="item_name"> {item.name} </div>
      <div className="item_const">$ {item.price.toLocaleString()} </div>
      <div className="item_controls">
        <button
          className="item_sell"
          disabled={count === 0}
          onClick={() => setCount(count - 1)}
        >
          Sell
        </button>
        <input
          className="item_count"
          value={count}
          onChange={(e) => handleChange(e)}
        />
        <button
          className="item_buy"
          disabled={money < item.price}
          onClick={() => setCount(count + 1)}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductBox;
