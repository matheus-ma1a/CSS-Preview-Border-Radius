import { useState } from 'react'
import './App.css'
import Inputscomp from './components/Inpustcomp'
import InputscompBotton from './components/inputscompBotton'




function App() {

  const  [topLeft, setTopLeft] = useState("0")
  const  [topRight, setTopRight] = useState("0")
  const  [bottomLeft, setBottomLeft] = useState("0")
  const  [bottomRight, setBottomRight] = useState("0")

  const eventoTopLeft = (a)=>{

    setTopLeft(a)

  }
  const eventoTopRight = (a)=>{

    setTopRight(a)

  }
  const eventoBottonLeft = (a)=>{

    setBottomLeft(a)

  }
  const eventoBottonRight = (a)=>{

    setBottomRight(a)

  }


  let Border = {
    borderTopLeftRadius: `${topLeft}px`,
    borderTopRightRadius: `${topRight}px`,
    borderBottomLeftRadius: `${bottomLeft}px`,
    borderBottomRightRadius: `${bottomRight}px`,
  }

  return (
    <div className="App">
      <div className="main">
        <h1>[Previwer]</h1>
        <h1>border-radius:</h1>

        <div className="params">
          <p className='textPrams' >border-radius: {topLeft}px {topRight}px {bottomLeft}px {bottomRight}px;</p>
        </div>

        <Inputscomp value={topLeft} eventoTopLeft={eventoTopLeft} eventoTopRight={eventoTopRight} />

        <div style={Border} className="previewborder"></div>

        <InputscompBotton eventoTopLeft={eventoBottonLeft} eventoTopRight={eventoBottonRight} />

        <footer> 
          Code by <a href="https://github.com/matheus-ma1a" >Matheus-ma1a</a> <i class="devicon-github-original "></i>
          
        </footer>

      </div>
    </div>
  )
}

export default App
