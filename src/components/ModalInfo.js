import './ModalInfo.css'
function ModalInfo(props) {
  
  return (props.info) ? (
    <div className='modal'>
      <div className='modal-inner'>
        <button className='close-btn' onClick = {()=>props.setInfo(false)}
          >X</button>
         {props.children}
        
      </div>

    </div>
  ) : "";
}

export default ModalInfo;