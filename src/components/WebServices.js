import React from "react";
function WebServices(){

  return (
    <div className="d-inline-flex p-3 flex-column border border-3 rounded-3 border-dark">
      <div className="m-2">
        <label htmlFor="pages" className="p-2">
          Número de páginas
        </label>
        <input type="number"
              name="pages"
              min={1} 
          />
      </div>
      <div className="m-2">
        <label htmlFor="languages" className="p-2">
          Número de idiomas
        </label>
        <input type="number" 
              name="numLanguages"
              min={1}
          />
      </div>
    </div>
  );
}
export default WebServices;