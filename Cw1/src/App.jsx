import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const App = () => {

  const produkt = {
    nazwa: "Laptop Dell",
    opis: "Laptop 15,6 cala z procesorem Intel Core i5 i 16 GB pamięci RAM.",
    cena: 3499.99
  }

  const [pokazSzczegoly, setPokazSzczegoly] = useState(false)

  const onVisibilityChange = (event) => {
    const isChecked = event.target.checked;
    console.log(`Szczegóły: ${isChecked}`);
    setPokazSzczegoly(isChecked);
  }

  return (
    <div>
      <h2>Szczegóły produktu</h2>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="pokazSzczegoly" onChange={onVisibilityChange} />
          <label className="form-check-label" htmlFor="pokazSzczegoly">Pokaż szczegóły</label>
        </div>

        {pokazSzczegoly && (
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">{ produkt.nazwa }</h5>
              <p className="card-text">{ produkt.opis }</p>
              <p className="card-price">Cena: { produkt.cena } zł</p>            
            </div>  
          </div>                    
        )}


    </div>
  )
}

export default App