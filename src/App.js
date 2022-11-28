import React from "react";
import { useState, useEffect } from "react";
import WebServices from "./components/WebServices";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";


function App() {
  //HOOKS
  /*Checkboxes, inputs controlados. Creamos un unico estado en formato array para centralizar la situacion de las 3 casillas -> estado inicial false pq no estan checked*/
  const [datos, setDatos] = useState({
    web: false,
    seo: false,
    google: false,
  });
  /*Estado para guardar los datos de pages y languages*/
  const [pages, setPages] = useState(1);
  const [languages, setLanguages] = useState(1);
  
  //USE EFFECT para mostrar el local storage al renderizar
  useEffect(() => {
    let data1 = localStorage.getItem("datos");
    if (data1) {
      setDatos(JSON.parse(data1));
    }
  }, []);
  useEffect(() => {
    let data2 = localStorage.getItem("pages");
    if (data2) {
      setPages(JSON.parse(data2));
    }
  }, []);
  useEffect(() => {
    let data3 = localStorage.getItem("languages");
    if (data3) {
      setLanguages(JSON.parse(data3));
    }
  }, []);
  //USE EFFECT para guardar los datos en localStorage
  useEffect(() => {
    localStorage.setItem("datos", JSON.stringify(datos));
    localStorage.setItem("pages", JSON.stringify(pages));
    localStorage.setItem("languages", JSON.stringify(languages));
  }, [datos, pages, languages]);
  //LOGIC
  /*esta es la funcion que maneja el evento onChange de los checkbox:
  simplemente maneja el estado ejecutanto el setDatos, que conserva los datos ya existentes con el spread operator y agrega los nuevos datos en funcion de si se selecciona o deseleciona el checkbox */
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: !datos[event.target.name],
    });
  };
  //variables para los precios (en webPrice incluyo el precio de pages y lang)
  const webPrice = datos.web ? 500 + pages * languages * 30 : 0;
  const seoPrice = datos.seo ? 300 : 0;
  const googlePrice = datos.google ? 200 : 0;
  const budget = webPrice + seoPrice + googlePrice;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="budget"
          element={
            <form className="form container border mt-5 p-3 row">
              <div className="col col-md-6">
              <h2 >¿ Qué quieres hacer ?</h2>
              <div className="form-check mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="web"
                  onChange={handleInputChange}
                  checked={datos.web}
                />
                <label className="form-check-label" htmlFor="web">
                  Una página web (500 €)
                </label>
              </div>
              {
                /*Renderizado condicional de WebServices component*/
                datos.web && (
                  <div className="d-inline-flex p-3 flex-column border border-3 rounded-3 border-dark">
                    <WebServices
                      label={"páginas"}
                      quantity={pages}
                      setQuantity={setPages}
                    />
                    <WebServices
                      label={"idiomas"}
                      quantity={languages}
                      setQuantity={setLanguages}
                    />
                  </div>
                )
              }

              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
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
                  name="google"
                  checked={datos.google}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="google">
                  Una campaña de Google Ads (200 €)
                </label>
              </div>
            <p className="mt-3">Precio: {budget} €</p>
              
              
              
              </div>
              <div className="col col-md-6 ">
                <h2>Cliente</h2>
                <div className="form  pt-3">
                  <label htmlFor="userName" className="d-block">Indique su nombre:</label>
                  <input type="text"  minLength="3" size="30" required></input>
                </div>
                <div className="form  pt-3">
                  <label htmlFor="userSurname" className="d-block">Indique su apellido:</label>
                  <input type="text" minLength="3"  size="30" required></input>
                </div>
                <div className="form  pt-3">
                  <label htmlFor="budgetName" className="d-block">Nombre del presupuesto:</label>
                  <input type="text" minLength="3"  size="30" required></input>
                </div>
                <button type="button" className="btn submit mt-5" >Guardar presupuesto</button>
              </div>
            </form>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

