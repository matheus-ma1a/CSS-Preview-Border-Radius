import React from "react";

function InputscompBotton(props){

  const handleInputBottonLeft = (e)=>{

    props.eventoTopLeft(e.target.value)
    
  }
  
  const handleInputBottonRight = (e)=>{
    
    props.eventoTopRight(e.target.value)

  }

  return(

    <div className="separadorBotton">

      <div className="wapper">
        <p>botton left</p>
        <input onChange={handleInputBottonLeft} className='inputs left-top' type="text"   />
      </div>
      
      <div className="wapper">
        <p>botton right</p>
        <input onChange={handleInputBottonRight} className='inputs rigth-top' type="text"  />
      </div>

    </div>
  )

}

export default InputscompBotton