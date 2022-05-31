import React from "react";
import TarjetaProducto from "../../components/TarjetaProducto";
import { productList } from "../../mockData/productList";
import { useState } from "react";
import SearchBar from "../../components/common/SearchBar";

const Productos = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="productos">
      <SearchBar
        placeholder={props.tag ? "Buscar Categoría" : "Buscar Producto"}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div className="__contenedor">
        {productList
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              !props.tag &&
              (val.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.categoria.toLowerCase().includes(searchTerm.toLowerCase()))
            ) {
              return val;
            } else if (
              props.tag &&
              val.categoria.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((producto, key) => {
            return (
              <TarjetaProducto
                key={key}
                img={producto.img}
                precio={producto.precio}
                nombre={producto.nombre}
                marca={producto.marca}
                categoria={producto.categoria}
                textoBoton={
                  props.tag ? "Cambiar Categoría" : "Agregar al Carro"
                }
                handleClick={props.handleClick}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Productos;
