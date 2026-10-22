import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const App = () => {
  return (
    <div>
      <h2>Ankieta zajęć</h2>
      <div className="mb-3">
        <label htmlFor="Grupa wiekowa" className="form-label">Grupa wiekowa: </label>
        <select className="form-select" id="grupaWiekowa">
          <option value=""></option>
          <option value="1">do 18 lat</option>
          <option value="2">19-30 lat</option>
          <option value="3">powyżej 30 lat</option>
        </select>
      </div>
      <label htmlFor="Ocena zajec" className="form-label">Ocena zajęć: </label> <p></p>     
      <div className="form-check form-check-inline">
      
        <input className="form-check-input" type="radio" name="ocena" id="ocena1" value="1" />
        <label className="form-check-label" htmlFor="ocena1">1</label>
        <input className="form-check-input" type="radio" name="ocena" id="ocena2" value="2" />
        <label className="form-check-label" htmlFor="ocena2">2</label>
        <input className="form-check-input" type="radio" name="ocena" id="ocena3" value="3" />
        <label className="form-check-label" htmlFor="ocena3">3</label>
        <input className="form-check-input" type="radio" name="ocena" id="ocena4" value="4" />
        <label className="form-check-label" htmlFor="ocena4">4</label>    
        <input className="form-check-input" type="radio" name="ocena" id="ocena5" value="5" />
        <label className="form-check-label" htmlFor="ocena5">5</label>
      </div>
      <p></p>
      <label htmlFor="Zainteresowania" className="form-label">Zainteresowania: </label>        
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="programowanie" value="Programowanie" />
        <label className="form-check-label" htmlFor="programowanie">Programowanie</label>
      </div>
    </div>
  )
}

export default App