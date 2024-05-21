import React, { memo, useEffect, useState } from "react";
import ProductView from "./product.view";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    await fetch("https://664d03f7ede9a2b5565268e0.mockapi.io/product")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const props = {
    products,
  };

  return <ProductView {...props} />;
};

export default memo(ProductContainer);
