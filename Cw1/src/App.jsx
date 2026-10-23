import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const App = () => {

  const [daysOfWeek, setDaysOfWeek] = useState([
    'Poniedziałek',
    'Wtorek',
    'Środa',
    'Czwartek',
    'Piątek',
    'Sobota',
    'Niedziela'
  ])


  const onSubmit = (event) => {
    event.preventDefault()
    console.log(`submit`)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="nazwaPosilku" className="form-label">Nazwa posiłku</label>
          <input type="text" className="form-control" id="nazwaPosilku"/>          
        </div>
        <div className="mb-3">
          <label htmlFor="liczbaKalorii" className="form-label">Liczba kalorii</label>
          <input type="number" className="form-control" id="liczbaKalorii"/>          
        </div>
        <div className="mb-3">
          <label htmlFor="dzienTygodnia" className="form-label">Dzień tygodnia</label>
          <select className="form-select" id="dzienTygodnia">     
            <option value=""></option>
            {daysOfWeek.map((day, index) => (<option value={index + 1} key={index + 1}>{day}</option>))}
          </select> 
        </div>
        <button type="submit" className="btn btn-primary">Dodaj</button>
      </form>
    </div>
  )
}

export default App