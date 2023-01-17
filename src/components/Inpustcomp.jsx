import React from "react";

function InputscompTop(props){

  const handleInputTopLeft = (e)=>{

    props.eventoTopLeft(e.target.value)
    
  }
  
  const handleInputTopRight = (e)=>{
    
    props.eventoTopRight(e.target.value)
    
  }

  return(
    <div className="separadorTop">
      <div className="wapper">
        <p>top left</p>
        <input onChange={handleInputTopLeft} className='inputs left-top' type="text"   />
      </div>

      <div className="wapper">
        <p>top right</p>
        <input onChange={handleInputTopRight} className='inputs rigth-top' type="text"  />
      </div>

  </div>
  )

}

export default InputscompTop