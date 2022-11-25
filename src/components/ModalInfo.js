import './ModalInfo.css'
function ModalInfo(props) {
  /*renderizado del componente dependiendo del estado al que accedemos con la prop info */  
  return (
    (props.info) && (
      <div className='modal'>
        <div className='modal-inner'>
          <button className='close-btn' onClick = {props.changeModal}
            >X</button>
           {props.children}
          
        </div>
  
      </div>
    ) 
  
   )
    
}

export default ModalInfo;