import React from "react";
import { useState } from "react";

const TarjetaProducto = (props) => {
  return (
    <div className="card">
      <div className="card__body">
        <div className="card__nombre">{props.nombre}</div>
        <div className="card__marca">{props.marca}</div>
        <img src={props.img} alt="" />
        <div className="card__pie">
          <div className="card__precio">${props.precio}</div>
          <div className="card__categoria">{props.categoria}</div>
        </div>

        <div className="card__btn" onClick={props.handleClick}>
          {props.textoBoton}
        </div>
      </div>
    </div>
  );
};

export default TarjetaProducto;
