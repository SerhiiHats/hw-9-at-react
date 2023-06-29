import React, {useEffect, useState} from 'react';
import styles from "./ProductPage.module.scss"
import CardProduct from "../companents/CardProduct/CardProduct";
import axios from "axios";
import {useLocation, useNavigate} from "react-router";

const ProductPage = () => {
    const [product, setProduct] = useState(null);
    const urlProduct = "https://fakestoreapi.com/products";

    const location = useLocation();
    const navigation = useNavigate();

    useEffect(() => {
      const category = location.state.items;
      axios(urlProduct)
        .then(response => {
          setProduct(response.data.filter(item => item.category === category))
        })
        .catch(error=>{
          console.log(error)
          navigation('/error');
        })

    }, [location]);


    const handleClickCard = (id) => {
      navigation(`/product/${id}`);
      console.log("click")
    }

    return (
      <div className={styles.containerProduct}>
        {product && product.map(item => {
          return (
            <div key={item.id} onClick={() => handleClickCard(item.id)} className={styles.wrapCardProduct}>
              <CardProduct handleClickCard={()=>handleClickCard(item.id)}
                           key={item.id}
                           id={item.id} image={item.image}
                           category={item.category}
                           title={item.title}
                           description={item.description}
                           price={item.price} rating={item.rating}/>
           </div>
        )
        })}
      </div>
    );
  }
;

export default ProductPage;