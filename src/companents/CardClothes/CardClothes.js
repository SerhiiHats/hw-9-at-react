import styles from "./CardProduct.module.scss"

import React from 'react';

const CardClothes = (props) => {

  const {id, image, category, title, description, price, rating, style} = props;

  let singleStyle = null;
  if (style && style === "singleStyle") {
    singleStyle = {
      maxWidth: "90%",
      justifyContent: "space-between",
      display:"flex",
    }
  }

  return (
    // <div onClick={()=>handleClickCard(id)} style={singleStyle} key={`item${id}`} id={`item${id}`} className={styles.cardClothes}>
    <div style={singleStyle} key={`item${id}`} id={`item${id}`} className={styles.cardClothes}>
      <div style={singleStyle} className={styles.wrapClothes}>
        <img style={style && {width: "50%"}} className={styles.clothesImg} src={image} alt={category} title={title}/>
        <div>
          <h2 className={styles.category}>category: {category}</h2>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.wrapPrice}><span>price: <span className={styles.price}> {price} $ </span> </span>
            <span> rating: {rating.rate} count: {rating.count}</span></p>
        </div>
      </div>
    </div>
  );
};

export default CardClothes;