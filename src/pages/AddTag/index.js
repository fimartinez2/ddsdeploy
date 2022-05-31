import React from "react";
import { tagList } from "../../mockData/tagList";
import { useState } from "react";
import Productos from "../Productos";
import useAddTag from "../../components/useAddTag";
import PopUp from "../../components/PopUp";
import ListaCategorias from "../../components/ListaCategorias";

const AddTag = () => {
  const [lista, setLista] = useState([...tagList]);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };
  const updateLista = () => {
    if (!lista.includes(newTag) && newTag !== "") {
      setLista((lista) => [...lista, newTag]);
    }
  };
  const { render, newTag } = useAddTag({ updateLista: updateLista });
  const contentPopUp = () => {
    return (
      <>
        <ListaCategorias lista={lista} />
        <div className="btn-cambiar">Cambiar</div>
      </>
    );
  };
  return (
    <div>
      {isOpen && <PopUp handleClose={togglePopUp} content={contentPopUp()} />}
      {render}
      <ListaCategorias lista={lista} />
      <Productos tag={true} handleClick={togglePopUp} />
    </div>
  );
};

export default AddTag;
