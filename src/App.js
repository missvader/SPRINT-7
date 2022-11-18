import React from 'react';
import { useState } from 'react';
import './App.css';


function App() {
  //HOOKS
  /*Checkboxes, inputs controlados. Creamos un unico estado en formato array para centralizar la situacion de las 3 casillas -> estado inicial false pq no estan checked
  El presupuesto tambien lo guardamos en un estado -> estado inicial 0*/
  const [datos, setDatos] = useState({
    web: false,
    seo:false,
    google: false
  })
  const [budget, setBudget]= useState(0);
  //LOGIC
  /*esta es la funcion que maneja el evento onChange de los checkbox:
  1- almacenamos en variable el value de cada input(aplicamos parseInt para que lo transforme en number y no lo devuelva como cadena)
  2- condicional --> si checked, se ejecuta setBudget() sumando el value del input, en caso contrario, se le resta el value (esto nos permite eliminar del total si anulamos seleccion) */
  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    const {name, checked} = event.target;
    setDatos(prevDatos =>{
      return{
        ...prevDatos,
        [name]: checked
      }
    })
    checked
      ? setBudget(budget + value)
      : setBudget(budget - value);
  }
  return (
    <div className="App">
     <form className='form container border mt-3 p-3'>
      <h5>¿ Qué quieres hacer ?</h5>
      <div className='form-check mt-3'>
        <input 
          className="form-check-input" 
          type="checkbox" 
          value={500} 
          name="web"
          onChange={handleInputChange}
          checked={datos.web}
        />
        <label className="form-check-label" htmlFor="web">
          Una página web (500 €)
        </label>
      </div>
      <div className="form-check mt-2">
        <input 
          className="form-check-input" 
          type="checkbox" 
          value={300}
          name="seo"
          checked={datos.seo}
          onChange={handleInputChange}
        />
        <label className="form-check-label" htmlFor="seo">
          Una consultoria SEO (300 €)
        </label>
      </div>
      <div className="form-check mt-2">
        <input 
          className="form-check-input" 
          type="checkbox" 
          value={200}
          name="google"
          checked={datos.google}
          onChange={handleInputChange}
        />
        <label className="form-check-label" htmlFor="google">
          Una campaña de Google Ads (200 €)
        </label>
      </div>
      <p className='mt-3'>Preu: {budget} €</p>
     </form>
    </div>
  );
}

export default App;
