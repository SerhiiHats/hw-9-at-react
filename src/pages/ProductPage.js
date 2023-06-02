import React, {useEffect, useState} from 'react';
import styles from "./ProductPage.module.scss"
import CardClothes from "../companents/CardClothes/CardClothes";
import axios from "axios";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const urlProduct = "https://fakestoreapi.com/products";

  // const category = "clothing";
  const category = "electronics";

  useEffect(() => {
    axios(urlProduct)
      .then(response => setProduct(response.data.filter(item=>item.category.includes(category))));
  }, []);

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