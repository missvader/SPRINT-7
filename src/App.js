import React from "react";
import { useState, useEffect } from "react";
import WebServices from "./components/WebServices";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Budget from "./components/Budget";
import { Link } from "react-router-dom";

function App() {
//HOOKS ESTADOS
  /*Checkboxes, inputs controlados. Creamos una nueva variable budget para tener todos los estados dentro de ella */
  const [budget, setBudget] = useState({
      web: false,
      seo: false,
      google: false,
      budgetName: "",
      clientName:"",
    }
  );
  const [pages, setPages] = useState(1);
  const [languages, setLanguages] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  
  //LOCAL STORAGE
  // funcion para guardar los datos en localStorage
  const saveBudget= ()=>{
    localStorage.setItem("budget", JSON.stringify(budget));
    localStorage.setItem("pages", JSON.stringify(pages));
    localStorage.setItem("languages", JSON.stringify(languages));
  };
  useEffect(()=>{
    saveBudget();
    // eslint-disable-next-line
  }, [budget, pages, languages])
  const getBudget =()=>{
    let newBudget = JSON.parse(localStorage.getItem("budget"));
    newBudget && setBudget(newBudget);
    let newPages = JSON.parse(localStorage.getItem("pages"));
    newPages && setPages(newPages);
    let newLang = JSON.parse(localStorage.getItem("languages"));
    newLang && setLanguages(newLang);
  }
  useEffect(()=>{
    getBudget();
  },[])
  //LOGIC
  /*esta es la funcion que maneja el evento onChange
  simplemente maneja el estado ejecutanto el setBudget, que conserva los datos ya existentes con el spread operator y agrega los nuevos datos (con un condicional validamos si es checkbox o no, y asi accedemos tanto a checkbox como a input text)*/
  const handleInputChange = (event) => {
    const {name, type, checked, value} = event.target
    setBudget((budget)=>{
      return{
        ...budget,
        [name]:
          type === "checkbox" ? checked : value
      }
    });
  };
  
  //function para los precios (en webPrice incluyo el precio de pages y lang)
  const calculateTotal = ()=>{
    let webPrice = budget.web ? 500 + pages * languages * 30 : 0;
    let seoPrice = budget.seo ? 300 : 0;
    let googlePrice = budget.google ? 200 : 0;
    let total = webPrice + seoPrice + googlePrice;
    setTotalPrice(total);
  }
  useEffect(()=> {
    calculateTotal();
    // eslint-disable-next-line
  },[budget, pages, languages])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/showBudget" 
              element={<Budget 
                        client ={budget.clientName}                  
                        budgetName = {budget.budgetName}
                        web ={budget.web}
                        numPages = {pages}
                        numLang = {languages}
                        seo = {budget.seo}
                        google ={budget.google}
                        total ={totalPrice}
                       />} />
        <Route
          path="form"
          element={
            <form className="form container border mt-5 p-3 row" >
              <div className="col col-md-6">
              <h2 >¿ Qué quieres hacer ?</h2>
              <div className="form-check mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="web"
                  checked={budget.web}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="web">
                  Una página web (500 €)
                </label>
              </div>
              {
                /*Renderizado condicional de WebServices component*/
                budget.web && (
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
                  checked={budget.seo}
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
                  checked={budget.google}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="google">
                  Una campaña de Google Ads (200 €)
                </label>
              </div>
            <p className="mt-3">Precio: {totalPrice} €</p>
              
              </div>
              <div className="col col-md-6 ">
                <h2>Cliente</h2>
                <div className="form  pt-3">
                  <label htmlFor="clientName" className="d-block">Indique su nombre:</label>
                  <input 
                    type="text" 
                    name="clientName"
                    minLength="3" 
                    onChange={handleInputChange}
                    required />
                </div>
                <div className="form  pt-3">
                  <label htmlFor="budgetName" className="d-block">Nombre del presupuesto:</label>
                  <input 
                    type="text" 
                    name="budgetName"
                    minLength="3"  
                    onChange={handleInputChange}
                    required />
                </div>
                <Link to="/showBudget">
                  <button className="guardar mt-5">
                    <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Presupuesto</span>
                  </button>
                </Link>
                
              </div>
            </form>
          }
        />
        
      </Routes>
    </div>
  );
}

export default App;

