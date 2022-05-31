import React from "react";
import { useState } from "react";

const useAddTag = (props) => {
  const [input, setInput] = useState("");
  return {
    newTag: input,
    render: (
      <div className="addTag">
        <div className="addTag__container">
          <h1> Agregar Categoría</h1>
          <div className="addTag__elements">
            <input
              type="text"
              placeholder="Nueva Categoría"
              onChange={(event) => {
                setInput(event.target.value);
              }}
            />
            <span className="btn" onClick={props.updateLista}>
              Crear
            </span>
          </div>
          {/* <div className="addTag__categorias"> Categorias</div> */}
        </div>
      </div>
    ),
  };
};

export default useAddTag;
