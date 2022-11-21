import React from "react";
import { Link } from "react-router-dom";
function Welcome(){
  return(
    <div>
      <h1>Funciona el routing, esta es la welcome page</h1>
      <Link to="budget">Click si quieres un presupuesto</Link>
    </div>
  )
}
export default Welcome;