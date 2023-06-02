import styles from "./CardClothes.module.scss"

import React from 'react';

const CardClothes = (props) => {
  // const urlImg = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/";

  // const navigate = useNavigate();
  //
  const {id, image, category, title, description, price, rating} = props;

  return (
    <div id={`item${id}`} className={styles.cardClothes}>
      <div className={styles.wrapClothes}>
        <img className={styles.clothesImg} src={image} alt={category} title={title}/>
        <h2 className={styles.category}>category: {category}</h2>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.wrapPrice}><span>price: <span> {price}</span></span> <span> rating: {rating.rate} count: {rating.count}</span></p>
      </div>
    </div>
  );
};

export default CardClothes;