import 'bootstrap/dist/css/bootstrap.css';

const App = () => {

  const produkt = {
    nazwa: "Laptop Dell",
    opis: "Laptop 15,6 cala z procesorem Intel Core i5 i 16 GB pamięci RAM.",
    cena: 3499.99
  }

  const onVisibilityChange = (event) => {
    if (event.target.checked == true){
      console.log("Szczegóły: true")      
    }

    else {
      console.log("Szczegóły: false")
    }
  }

  return (
    <div>
      <h2>Szczegóły produktu</h2>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="pokazSzczegoly" onChange={onVisibilityChange} />
          <label className="form-check-label" htmlFor="pokazSzczegoly">Pokaż szczegóły</label>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">{ produkt.nazwa }</h5>
            <p className="card-text">{ produkt.opis }</p>
            <p className="card-price">Cena: { produkt.cena } zł</p>            
          </div>
        </div>

    </div>
  )
}

export default App