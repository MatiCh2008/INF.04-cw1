import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const App = () => {

  const [bilety, setBilety] = useState([
    {nazwa: "normalny", cena: 20},
    {nazwa: "ulgowy", cena: 12}
  ])

  const [wybranyBilet, setWybranyBilet] = useState(bilety[0].nazwa)
  const [liczbaBiletow, setLiczbaBiletow] = useState(1)
  const [cena, setCena] = useState()
  const [blad, setBlad] = useState(false);

  const onWybranyBiletChange = (event) => {
    setWybranyBilet(event.target.value)
  }

  const onLiczbaBiletowChange = (event) => {
    setLiczbaBiletow(event.target.value)
  }

  const Submit = (event) => {
    event.preventDefault()

    if (isNaN(liczbaBiletow) || liczbaBiletow < 1) {
      console.log("Błąd: nieprawidłowa liczba biletów.");
      setBlad(true);
      setCena(null);
      return;
    }

    setBlad(false)

    const bilet = bilety.find(bilet => bilet.nazwa === wybranyBilet)

    const wynik = bilet.cena * liczbaBiletow
    setCena(wynik)

    console.log(`Bilety: ${bilet.nazwa}; liczba: ${liczbaBiletow}; suma: ${wynik} zł`)
  }

  return (
    <div>
      <h2>Kalkulator biletów</h2>
      <form onSubmit={Submit}>
        {bilety.map(bilet => (
        <div className="form-check" key={bilet.nazwa}>
          <input className="form-check-input" type="radio" name="rodzajBiletu" id={bilet.nazwa} value={bilet.nazwa} checked={wybranyBilet === bilet.nazwa} onChange={onWybranyBiletChange}/>
          <label className="form-check-label" htmlFor={bilet.nazwa}>{bilet.nazwa} ({bilet.cena})</label>
        </div>
        ))}

        <div className="mb-3">
          <label htmlFor="liczbaBiletow" className="form-label">Liczba biletów: </label>
          <input type="number" className="form-control" id="liczbaBiletow" min="1" value={liczbaBiletow} onChange={onLiczbaBiletowChange}/>
        </div>

        <button type="submit" className="btn btn-primary">Oblicz</button>
        
      </form>

      {cena != null && (
      <div className="alert alert-success" role="alert">Do zapłaty: {cena} zł</div>        
      )}
      
      {blad && (
      <div className="alert alert-danger" role="alert">Podaj liczbę biletów większą od 0</div>        
      )}


    </div>
  )
}

export default App