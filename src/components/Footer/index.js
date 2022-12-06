import React from "react";
import { useSelector } from "react-redux";
import { productsSelector } from "../../redux/productsSlice";
import "./styles.scss";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const products = useSelector(productsSelector);
  const filteredProducts = products.filter((product) => product.count > 0);

  let total = 0;
  filteredProducts.map((product) => (total += product.price * product.count));

  const formatNumber = (number) => {
    number = Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(number);
    return number;
  };

  return (
    <div className="footer">
      {filteredProducts.length > 0 && (
        <div className="bill">
          <div className="title">Your Receipt</div>
          {filteredProducts.map((product) => (
            <div className="receipt" key={product.id}>
              <div className="receipt_item">{product.name}</div>
              <div className="receipt_item_amount">
                x{formatNumber(product.count)}
              </div>
              <div className="receipt_item_const">
                ${formatNumber(product.price * product.count)}
              </div>
            </div>
          ))}
          <div className="receipt_total">
            <span>Total</span>
            <div className="receipt_total_amount">${total}</div>
          </div>
        </div>
      )}
      <div className="about">
        <span>Spend Money App</span>
        <span>Created by
          <a href="https://www.linkedin.com/in/bilal-halici/">
            Bilal Halici
            <BsLinkedin />
          </a>
        </span>
        <a href="https://github.com/bllhlc" >
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
