import React from "react";
import { Link } from "react-router-dom";
function Welcome(){
  return(
    <div className="welcome">
      <h1 className="title">ENCUENTRA LA SOLUCIÓN QUE NECESITAS PARA TU EMPRESA</h1>
      <Link to="form" className="link">Quiero saber más</Link>
    </div>
  )
}
export default Welcome;