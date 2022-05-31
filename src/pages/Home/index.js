import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [userTokenType, userToken, userName] = useSelector((state) => {
    return [state.userTokenType, state.userToken, state.userName];
  });

  const navigate = useNavigate();
  const goProducts = () => {
    navigate("/productos");
  };
  const goTags = () => {
    navigate("/add-tag");
  };
  const goOrderHistory = () => {
    navigate("/order-history");
  };
  const goCupons = () => {
    navigate("/cupons");
  };
  return (
    <div className="home-div">
      <h1>Hola {userName}</h1>
      <ul>
        <li>Token {userToken}</li>
        <li>TokenType {userTokenType}</li>
      </ul>
      <h1>Home</h1>
      <h3 onClick={goProducts}>Ir a sección productos</h3>
      <h3 onClick={goTags}>Ir a sección categorías</h3>
      <h3 onClick={goOrderHistory}>Ir a sección de historial de compras</h3>
      <h3 onClick={goCupons}>Ir a sección de cupones</h3>
    </div>
  );
};

export default Home;
