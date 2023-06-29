import React, {useEffect, useState} from 'react';
import styles from "./ProductPage.module.scss"
import CardProduct from "../companents/CardProduct/CardProduct";
import axios from "axios";
import {useLocation, useNavigate} from "react-router";
import {Link} from "react-router-dom";

const ProductPage = () => {
    const [product, setProduct] = useState(null);
    const urlProduct = "https://fakestoreapi.com/products";

    const location = useLocation();
    const navigation = useNavigate();

    useEffect(() => {
      // const urlFromState = location.pathname.split("/");
      // const category = urlFromState.pop();
      const category = location.state.items;
      axios(urlProduct)
        .then(response => {
          setProduct(response.data.filter(item => item.category === category))
          response.data.forEach(item=>{
            console.log(item.category)})
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
        {/*{product && product.map(item => {*/}
        {/*  return <Link to={`/product/${item.id}`}>*/}
        {/*    <CardProduct id={item.id} image={item.image} category={item.category} title={item.title}*/}
        {/*                 description={item.description}*/}
        {/*                 price={item.price} rating={item.rating}/>*/}
        {/*  </Link>*/}
        {/*})}*/}
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