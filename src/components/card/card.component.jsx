import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import "./card.styles.scss";

const Card = ({ product }) => (
  <div className="card-container">
    <h2 className="text-center">{product.name}</h2>
    <div className="content">
      <img
        className="image"
        src={`https://robohash.org/${product.id}?set=set2&size=180x180`}
        alt="product"
      />
      <div className="info">
        <ul className="list-group">
          <li className="list-group-item text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            sit, eius, nostrum consequuntur similique
          </li>
          <li className="list-group-item">Price: $2387</li>
          <li className="list-group-item">Stock: 2387</li>
        </ul>
      </div>
    </div>
    <CustomButton>Add to cart</CustomButton>
  </div>
);

export default Card;
