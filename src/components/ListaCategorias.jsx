import React from "react";
import { useState } from "react";

const ListaCategorias = (props) => {
  const [selected, setSelected] = useState();
  return (
    <div className="categorias">
      <ul>
        {props.lista.map((categoria, key) => {
          return (
            <li className="tag" key={key}>
              {categoria}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListaCategorias;
