import React from "react";
// PENDIENTE: Refactorizar codigo
/*al componente le pasamos por parametros languages, pages y los set de cada uno para modificar estado. necesitamos que el componente hijo se comunique con el padre y lo hacemos mediante props */
//LOGICA
/*Estas son las funciones que manejan los eventos, tanto input como button (está pendiente refactorizar código) */
function WebServices({pages, languages, setPages, setLanguages}){
  const handleChangePages =(event)=>{
    event.prentDefault();
    setPages(parseInt(event.target.value));
  }
  const handleChangeLanguages=(event)=> {
    event.preventDefault();
    setLanguages(parseInt(event.target.value));
  }
  const sumarPages = (event)=> {
    event.preventDefault();
    setPages(pages => pages + 1)
  } 
  const restarPages = (event) => {
    event.preventDefault();
    setPages(pages => pages > 1 ? pages - 1 : pages)
  }
  const sumarLanguages = (event)=> {
    event.preventDefault();
    setLanguages(languages => languages + 1)
  } 
  const restarLanguages = (event) => {
    event.preventDefault();
    setLanguages(languages => languages > 1 ? languages - 1 : languages)
  }
  return (
    <div className="d-inline-flex p-3 flex-column border border-3 rounded-3 border-dark">
      <div className="m-2">
        <label htmlFor="pages" className="p-2">
          Número de páginas
        </label>
        <button onClick={sumarPages}>+</button>
        <input 
              name="pages"
              value={pages}
              min={1} 
              onChange={handleChangePages}
          />
        <button onClick={restarPages}>-</button>
      </div>
      <div className="m-2">
        <label htmlFor="languages" className="p-2">
          Número de idiomas
        </label>
        <button onClick={sumarLanguages}>+</button>
        <input 
              name="languages"
              min={1}
              value={languages}
              onChange= {handleChangeLanguages}
          />
        <button onClick={restarLanguages}>-</button>
      </div>
    </div>
  );
}
export default WebServices;