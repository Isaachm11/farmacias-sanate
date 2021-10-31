import React, { useEffect, useState } from "react";
import CardList from "../../components/card-list/card-list.component";

import { url_server } from "../../App";

const ProductsListPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${url_server}/products`).then((response) =>
      response.json().then((products) => setProducts(products))
    );
  }, []);

  return (
    <div className="products-list">
      <CardList products={products} />
    </div>
  );
};

export default ProductsListPage;
