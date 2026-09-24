import { Button } from "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import { useState } from "react"

const App = () => {

  const [cities, setCities] = useState([
  "Szczecin",
  "Gdańsk",
  "Kraków",
  "Wrocław",
  "Poznań"
  ]);

  const showInConsole = (event) => {
    console.log(cities);
  }

  return (
    <div>
      <h2>Liczba miast: {cities.length}</h2>
      <ol>
        {cities.map(city => <li key={city}>{city}</li>)}
      </ol>
      <button className="btn btn-primary" onClick={showInConsole}>Pokaż w konsoli</button>
    </div>
  )
}

export default App