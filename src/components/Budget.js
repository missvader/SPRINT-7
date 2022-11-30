import React from "react";
import "../App.css";
function Budget(){
  return(
   <div className="container row justify-content-center align-items-center  ">
    <div className="card col-md-6 ">
      <h1 className="card-title text-center">PRESUPUESTO</h1>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cliente:</li>
        <li class="list-group-item">Presupuesto:</li>
        <li class="list-group-item">Fecha:</li>
        <li class="list-group-item">Página web</li>
        <li class="list-group-item">Num pag</li>
        <li class="list-group-item">Num lang</li>
        <li class="list-group-item">Consultoria SEO</li>
        <li class="list-group-item">Campaña Google Adds</li>
        <li class="list-group-item">TOTAL:</li>
      </ul>
    </div>
   </div> 
    
  )
}
export default Budget;