import React from 'react';
import "./MainPage.scss"
import {useNavigate} from "react-router";

const MainPage = () => {

  const navigation = useNavigate();


  const handleStartClick = () => {
    navigation("product/clothing", {state: {items: "clothing"}});
  };
  return (
    <div onClick={() => handleStartClick()} className={"mainPage backImg"}>
      {/*Main Page*/}
      <p>В нашому магазині лише актуальні товари</p>
    </div>
  );
};

export default MainPage;