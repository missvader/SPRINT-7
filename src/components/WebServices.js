import React from "react";
import { useState} from "react";
import {BsQuestionCircleFill} from "react-icons/bs";
import './ModalInfo.css';
import ModalInfo from "./ModalInfo";


/*Refactorización del componente webservices. Lo he hecho más pequeño, pasando nuevas props que en cada llamada al componente se definen como pages o languages. De esta manera solo tenemos 3 funciones */
//LOGICA
/*Estas son las funciones que manejan los eventos, tanto input como button */
function WebServices({label, quantity, setQuantity}){
  
  const handleChange =(event)=>{
    event.preventDefault();
    setQuantity(parseInt(event.target.value));
  }
  const sumar = (event)=> {
    event.preventDefault();
    setQuantity(quantity => quantity + 1)
  } 
  const restar = (event) => {
    event.preventDefault();
    setQuantity(quantity => quantity > 1 ? quantity - 1 : quantity)
  }
  /*Estado para el modal-info*/
  const [Info, setInfo] = useState(false);
  /*función para hacer que cambie el estado del modal, importante el preventDefault  */
  const changeModal = (event) => {
    event.preventDefault();
    setInfo(!Info);
  }

  /*console.log("estado del modal" , Info)*/
  return (
      <div className="webservices m-2 d-flex">
        <label htmlFor="Webservices" className="p-2">
          Número de {label} :
        </label>
        <button className="btn btn-danger" onClick={sumar}>+</button>
        <input className="number border-0 "
              type="number" 
              value={quantity}
              min={1} 
              onChange={handleChange}
          />
        <button className="btn btn-danger" onClick={restar}>-</button>
        <button className="btn border-0" onClick ={changeModal} ><BsQuestionCircleFill/></button>
        <ModalInfo
          info = {Info}
          changeModal = {changeModal}
        >
            <p className="text-center">Seleccione el numero de {label} que desea en su sitio web</p>
        </ModalInfo>
          
      </div>
  );
  }
export default WebServices;