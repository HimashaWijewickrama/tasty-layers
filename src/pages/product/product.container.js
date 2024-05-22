//import dependencies
import React, { memo, useEffect, useState } from "react";

import ProductView from "./product.view";

const ProductContainer = () => {
  const [products, setProducts] = useState([]); //declare to hold all products

  //use useEffect hook to fecth data from the API
  useEffect(() => {
    fetchProductData();
  }, []);

  //function to fetch product data that are comming from API
  const fetchProductData = async () => {
    await fetch("https://664d03f7ede9a2b5565268e0.mockapi.io/product")
      .then((res) => res.json()) //convert response(data) into the json format
      .then((data) => setProducts(data))
      .catch((err) => {
        console.log(err);
      });
  };

  //pass the props (products) to ProductView component
  const props = {
    products,
  };

  //render ProductView component
  return <ProductView {...props} />;
};

export default memo(ProductContainer);
