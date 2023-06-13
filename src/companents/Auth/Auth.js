import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loginAC, LogoutAC} from "./authAction";

const Auth = () => {

  const auth = useSelector(store => store.auth)

  const dispatch = useDispatch();


  const handleAuth = () => {
    dispatch(loginAC());
    console.log(auth);
  }

  const handleNotAuth = () => {
    dispatch(LogoutAC());
    console.log(auth);
  }

  return (
    <div>
      <div>
        <p>Підтвердити ваш вік</p>
        <button onClick={() => handleAuth()}>Мені більш як 18 років»</button>
        <button onClick={() => handleNotAuth()}>Мені не виповнилось 18 років»</button>
      </div>
    </div>
  );
};

export default Auth;