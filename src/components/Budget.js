import React from "react";
/*import {useState} from "react";*/
import "../App.css";
function Budget(props){
  //creamos variable para usuarios, estado inicial vacio 
  /*const [users, setUsers ]= useState([]);
  console.log(users)*/
  return(
   <div className="container row justify-content-center align-items-center  ">
    <div className="card col-md-6 ">
      <h1 className="card-title text-center">PRESUPUESTO</h1>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cliente:</li>
        <li className="list-group-item">Presupuesto:</li>
        <li className="list-group-item">Fecha:</li>
        <li className="list-group-item">Página web</li>
        <li className="list-group-item">Num pag</li>
        <li className="list-group-item">Num lang</li>
        <li className="list-group-item">Consultoria SEO</li>
        <li className="list-group-item">Campaña Google Adds</li>
        <li className="list-group-item">TOTAL:</li>
      </ul>
    </div>
   </div> 
    
  )
}
export default Budget;