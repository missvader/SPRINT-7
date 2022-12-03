import React from "react";
import { useState, useEffect } from "react";
import WebServices from "../components/WebServices";
import Budget from "../components/Budget";
import "../App.css"
function Main(){
  //HOOKS ESTADOS
/*esta función es la que nos permitirá recuperar la data del localStorage y que no se borre al renderizar. La guardamos en variable datos. Si existen datos en el localStorage los devuelve, y si no, devuelve un array vacio. Pasamos esta función como estado inicial de presupuestos, y asi cuando se renderice queda almacenado lo que ya estuviese en localStorage como estado inicial ---> PERSISTENCIA DATOS LOCAL STORAGE*/
const getPresupuestos = () =>{
  let datos = localStorage.getItem("presupuestos");
  if(datos){
    return JSON.parse(datos);
  }else{
    return [];
  }
}
  /*creamos tambien un estado donde guardar todo, que sirva como contenedor de todos los registros*/
  const [presupuestos, setPresupuestos]=useState(getPresupuestos());
  
  const [web,setWeb]=useState(false);
  const [seo,setSeo]=useState(false);
  const [google,setGoogle]=useState(false);
  const [pages, setPages] = useState(1);
  const [languages, setLanguages] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [budgetName, setBudgetName] = useState("");
  const [clientName, setClientName] = useState("");
  

/*estado para el "contador" que usaremos para crear id consecutivas en los presupuestos */
  const [countId, setCountId] = useState(1);
/*funcion para generar id en presupuesto*/
const generarId = () => {
  setCountId(countId + 1);
  return countId;
}

 /*esta es la función que servirá para guardar el presupuesto en localStorage al hacer submit en el boton guardar */

 const saveButton = (e) => {
  //para evitar que la pag se recargue al submit, ponemos el preventDefault
  e.preventDefault();
  //en esta variable es donde guardamos todos los state que queremos guardar
  let newBudget = 
    {presupuesto : budgetName, 
     cliente: clientName,
     fecha : new Date().toLocaleDateString(),
     id: generarId(),
     web: web,
     seo: seo,
     google: google, 
     paginas: pages, 
     idiomas:languages,
     precioTotal :totalPrice}
  //a continuación guardamos en el array de data
  setPresupuestos([...presupuestos, newBudget])
  limpiarForm();
}
const limpiarForm = () => {
  setWeb(false);
  setSeo(false);
  setGoogle(false);
  setPages(1);
  setLanguages(1);
  setTotalPrice(0);
  setBudgetName("");
  setClientName("");
}
  
  //LOCAL STORAGE GUARDAR DATOS
  /*guardamos la data dentro del localStorage, lo ponemos dentro de useEffect pq se ejecutara autamicamente cuando detecte cambios en data. Importante, ponemos data como dependencia para que solo se ejecute una vez */
  useEffect(()=>{
    localStorage.setItem("presupuestos", JSON.stringify(presupuestos));
  }, [presupuestos]);
  
  //function para los precios (en webPrice incluyo el precio de pages y lang)
  const calculateTotal = ()=>{
    let webPrice = web ? 500 + pages * languages * 30 : 0;
    let seoPrice = seo ? 300 : 0;
    let googlePrice = google ? 200 : 0;
    let total = webPrice + seoPrice + googlePrice;
    setTotalPrice(total);
  }
  useEffect(()=> {
    calculateTotal();
    // eslint-disable-next-line
  },[web, seo, google, pages, languages])

  //Funciones para los botones ORDENAR BUDGETS
  function sortAlpha(){
    const alpha =  presupuestos.sort((a,b)=>{
        return a.cliente.toLowerCase() > b.cliente.toLowerCase() ? 1 : -1;
      })
    setPresupuestos([...alpha])
  }

  function sortByDate(){
    const byDate = presupuestos.sort((a,b)=>{
      return a.fecha.toLowerCase() > b.fecha.toLowerCase() ? 1 : -1;
    })
    setPresupuestos([...byDate])
  }
  //idea para esta función--> crear una función que dé un id consecutivo con un contador a cada presupuesto que guardemos, asi cuando queramos volver al orden inicial de presupuestos solo tenemos que sort los id de menor a mayor (pq ahora me encuentro con que la key del presupuesto guardado se cambia tambien según el orden que pongamos con las anteriores funciones de ordenar)
  function resetOrdenInicial(){
    const ordenInicial = presupuestos.sort((a,b) => a.id - b.id)
    setPresupuestos([...ordenInicial])  
  }
  
  
  return(
   <div className="container-fluid  mt-3 ">
    <div className="row">
      <div className=" col-12 col-md-5   d-flex justify-content-center">
        <form className="form " onSubmit={saveButton}>
          <h2 className="">¿Qué quieres hacer?</h2>
          <div className="form-check mt-3 ">
            <input
              className="form-check-input"
              type="checkbox"
              name="web"
              checked={web}
              onChange={(e)=>setWeb(!web)}
            />
            <label className="form-check-label" htmlFor="web">
              Una página web (500 €)
            </label>
          </div>
          {
          /*Renderizado condicional de WebServices component*/
            web && (
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
              checked={seo}
              onChange={(e)=>setSeo(!seo)}
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
              checked={google}
              onChange={(e)=>setGoogle(!google)}
            />
            <label className="form-check-label" htmlFor="google">
              Una campaña de Google Ads (200 €)
            </label>
          </div>
          <p className="mt-3">Precio: {totalPrice} €</p>
          <div className="mt-4">
            <h2>Cliente</h2>
            <div className="form  pt-3">
              <label htmlFor="clientName" className="d-block">Indique su nombre:</label>
                <input 
                  type="text" 
                  name="clientName"
                  value={clientName}
                  minLength="3" 
                  onChange={(e)=> setClientName(e.target.value)}
                  required />
            </div>
            <div className="form  pt-3">
              <label htmlFor="budgetName" className="d-block">Nombre del presupuesto:</label>
              <input 
                type="text" 
                name="budgetName"
                value={budgetName}
                minLength="3"  
                onChange={(e)=> setBudgetName(e.target.value)}
                required />
            </div>
            <div className=" d-flex justify-content-end">
              <button className="guardar mt-5 " type="submit">
                <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
                </span>
                <span className="button-text">GUARDAR</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-12 col-md-7  ">
        <h2 className="text-center mb-5">Presupuestos</h2>
        <div className="d-flex justify-content-center mb-5">
          <button className="button-sort" onClick={()=>sortAlpha(presupuestos)}>Ordena alfabeticamente</button>
          <button className="button-sort ms-3 me-3" onClick={()=>sortByDate(presupuestos)}>Ordena por fecha </button>
          <button className="button-sort" onClick={()=>resetOrdenInicial(presupuestos)}>Reinicia orden</button>
        </div>
        <Budget  presupuestos={presupuestos} />
      </div>
    </div>
   </div>
  )
}
export default Main;