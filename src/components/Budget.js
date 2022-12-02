import React from "react";
import "../App.css";

function Budget({presupuestos}){
  
  return(
   <div className="col-12">
    <table className="table table-responsive table-hover">
      <thead className=" text-center">
        <tr>
          <th>#</th>
          <th>PRESUPUESTO</th>
          <th>CLIENTE</th>
          <th>FECHA</th>
          <th>WEB</th>
          <th>IDIOMAS WEB</th>
          <th>PAGINAS WEB</th>
          <th>SEO</th>
          <th>GOOGLE ADDS</th>
          <th>TOTAL</th>
        </tr>
      </thead>
      <tbody className="text-center align-baseline">
        {
          presupuestos.map((newBudget, index)=>(
            <tr>
              <td>{index + 1}</td>
              <td>{newBudget.presupuesto}</td>
              <td>{newBudget.cliente}</td>
              <td>{newBudget.fecha}</td>
              <td>{newBudget.web ? "si" : "no"}</td>
              <td>{newBudget.web ? newBudget.idiomas : "no"}</td>
              <td>{newBudget.web ? newBudget.paginas : "no"}</td>
              <td>{newBudget.seo ? "si" : "no"}</td>
              <td>{newBudget.google ? "si" : "no"}</td>
              <td>{newBudget.precioTotal} € </td>
              <td></td>
            </tr>
          ))
        }
      </tbody>
    </table> 
   </div> 
    
  )
}
export default Budget;