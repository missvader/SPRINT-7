import React from 'react';
import { useState} from 'react';
/*import WebServices from './components/WebServices';*/
import './App.css';


function App() {
  /*
    (NOTA: version del ejercicio 2 todo junto)
    (PENDIENTE: separar Webservices component)
  */
  //HOOKS
  /*Checkboxes, inputs controlados. Creamos un unico estado en formato array para centralizar la situacion de las 3 casillas -> estado inicial false pq no estan checked*/
  const [datos, setDatos] = useState({
    web: false,
    seo:false,
    google: false,
  })
  /*Estado para guardar los datos de pages y languages*/
  const [pages, setPages] = useState(1);
  const [languages, setLanguages] = useState(1);
  //LOGIC
  /*esta es la funcion que maneja el evento onChange de los checkbox:
  simplemente maneja el estado ejecutanto el setDatos, que conserva los datos ya existentes con el spread operator y agrega los nuevos datos en funcion de si se selecciona o deseleciona el checkbox */
  const handleInputChange = (event) => {
    /*const value = parseInt(event.target.value);
    const {name, checked} = event.target;
    setDatos(prevDatos =>{
      return{
        ...prevDatos,
        [name]: checked
      }
    })
    checked
      ? setBudget(budget + value)
      : setBudget(budget - value);*/
    setDatos({
      ...datos,
      [event.target.name]: !datos[event.target.name],
    });
   
  }
  //variables para los precios (en webPrice incluyo el precio de pages y lang)
    const webPrice = datos.web ? (500 + pages * languages * 30 ) : 0;
    const seoPrice = datos.seo ? 300 : 0;
    const googlePrice = datos.google ? 200 : 0;
    const budget = webPrice + seoPrice + googlePrice;
  return (
    <div className="App">
     <form className='form container border mt-3 p-3'>
      <h5>¿ Qué quieres hacer ?</h5>
      <div className='form-check mt-3'>
        <input 
          className="form-check-input" 
          type="checkbox" 
          /*value={500} */
          name="web"
          onChange={handleInputChange}
          checked={datos.web}
        />
        <label className="form-check-label" htmlFor="web">
          Una página web (500 €)
        </label>
      </div>
      {/*Renderizado condicional de WebServices component(de momento componente dentro de app), simplemente al ejecutar funcion que maneja evento, se recoge value y se actualiza estado de pages y languages*/
        datos.web && /*<WebServices/>*/
            (
              <div className="d-inline-flex p-3 flex-column border border-3 rounded-3 border-dark">
      <div className="m-2">
        <label htmlFor="pages" className="p-2">
          Número de páginas
        </label>
        <input type="number"
              name="numPages"
              min={1} 
              value={pages}
              onChange={(event)=> setPages(event.target.value)}
          />
      </div>
      <div className="m-2">
        <label htmlFor="languages" className="p-2">
          Número de idiomas
        </label>
        <input type="number" 
              name="numLanguages"
              min={1}
              value={languages}
              onChange={(event)=> setLanguages(event.target.value)}
          />
      </div>
    </div>
            )
      }
      <div className="form-check mt-2">
        <input 
          className="form-check-input" 
          type="checkbox" 
          /*value={300}*/
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
          /*value={200}*/
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
