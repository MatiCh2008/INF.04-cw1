import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';



const App = () => {

  const [counter, setCounter] = useState(0);

  const onClickDodaj = () => {
    setCounter(counter + 1)
    console.log("Licznik: ", counter + 1)
  }

  const onClickOdejmij = () => {
    setCounter(counter - 1)
    console.log("Licznik: ", counter - 1)    
  }  

  const onClickReset = () => {
    setCounter(0)
    console.log("Licznik: ", 0)      
  }



  return (
<div>
  <h2>Licznik</h2>
  <h3>{counter}</h3>
  <div className="btn-group" role="group">
    <button type="button" className="btn btn-outline-primary" onClick={onClickDodaj}>+1</button>
    <button type="button" className="btn btn-outline-primary"  onClick={onClickOdejmij} disabled={counter === 0}>−1</button>
    <button type="button" className="btn btn-outline-secondary" onClick={onClickReset}>Reset</button>
  </div>
</div>
  )
}

export default App