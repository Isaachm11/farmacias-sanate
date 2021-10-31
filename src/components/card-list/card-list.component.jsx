import React from "react";
import Card from '../card/card.component'
import "./card-list.styles.scss";

const CardList = ({products}) => {
  return (
    <div className="card-list">
      {products.map((product) => (
        <Card key={product.p_id} product={product}/>
      ))}
    </div>
  );
};

export default CardList