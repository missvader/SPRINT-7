import React from "react";
/*import {Services} from "./styled-components";*/
// PENDIENTE: maquetacion componente 
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
  return (
      <div className=" m-2">
        <label htmlFor="Webservices" className="p-2">
          {label}
        </label>
        <button className="btn btn-danger" onClick={sumar}>+</button>
        <input className="number border-0"
              type="number" 
              value={quantity}
              min={1} 
              onChange={handleChange}
          />
        <button className="btn btn-danger" onClick={restar}>-</button>
      </div>
  );
}
export default WebServices;