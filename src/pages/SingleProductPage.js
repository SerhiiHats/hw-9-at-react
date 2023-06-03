import styles from "./SingleProductPage.module.scss"

import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import CardClothes from "../companents/CardClothes/CardClothes";
import axios from "axios";

const SingleProductPage = () => {

  const [product, setProduct] = useState(null);
  const params = useParams();
  const urlProduct = "https://fakestoreapi.com/products";

  useEffect(() => {
    const id = params.id;
    axios(`${urlProduct}/${id}`)
      .then(response => setProduct(response.data));
  }, []);


  return (
    <div>
      SingleProductPage<br/>
      {product &&
        <CardClothes id={`product${product.id}`} image={product.image} category={product.category} title={product.title}
                     description={product.description}
                     price={product.price} rating={product.rating}/>}

    </div>);
};

export default SingleProductPage;