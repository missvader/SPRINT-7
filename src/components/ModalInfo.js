import './ModalInfo.css'
function ModalInfo(props) {
  /*funcion para detener propagacion evento conClick  del padre modal y que no se cierre modal al click en contenido */
  const handleModalContenidoOnClick = (event)=> event.stopPropagation();
  /*renderizado del componente dependiendo del estado al que accedemos con la prop info */  
  return (
    (props.info) && ( 
      <div className='modal' onClick={props.changeModal}>
        <div className='modal-inner' onClick={handleModalContenidoOnClick}>
           {props.children}
        </div>
  
      </div>
    ) 
  
   )
    
}

export default ModalInfo;