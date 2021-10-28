import React, { useEffect, useState } from "react";
import CardList from "../../components/card-list/card-list.component";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => setProducts(users))
    );
  }, []);

  return (
    <div className="products-list">
      <CardList products={products} />
    </div>
  );
};

export default ProductsList;
