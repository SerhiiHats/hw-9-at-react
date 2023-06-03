import React, {useEffect, useState} from 'react';
import styles from "./ProductPage.module.scss"
import CardClothes from "../companents/CardClothes/CardClothes";
import axios from "axios";
import {useLocation} from "react-router";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const urlProduct = "https://fakestoreapi.com/products";

  const location = useLocation();
  // location && console.log(location.state.items)

  // const category = "clothing";
  const category = "electronics";

  useEffect(() => {
    const category = location.state.items;
    axios(urlProduct)
      .then(response => setProduct(response.data.filter(item=>item.category.includes(category))));
  }, [location]);

  // product && console.log(product)

  return (
    <div className={styles.containerProduct}>
      {product && product.map(item => {
        return <CardClothes id={item.id} image={item.image} category={item.category} title={item.title} description={item.description}
                            price={item.price} rating={item.rating}/>
      })}
      {/*<CardClothes/>*/}
    </div>
  );
};

export default ProductPage;