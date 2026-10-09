import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const App = () => {

  const animals = [
    { id: 1, nazwa: "Dalmatyńczyk", plik: "obraz3.jpg" },
    { id: 2, nazwa: "Świnka morska", plik: "obraz4.jpg" },
    { id: 3, nazwa: "Kotki", plik: "obraz7.jpg" }
  ]

  const getImageUrl = (name) => {
    return new URL(`./assets/${name}`, import.meta.url).href;
  };

  const onAnimalSelect = (animalName) => {
    console.log(`Wybrano: ${animalName}`)
  }

  return (
    <div className="p-3">
      <h2>Zwierzęta do adopcji</h2>
      <div className="d-flex flex-wrap gap-3">      
      {animals.map((animal) => (  
        <div className="card" style={{width: '18rem'}} key={animal.id}>
          <img src={getImageUrl(animal.plik)} className="card-img-top" alt={animal.nazwa} style={{margin: '5px'}}/>
          <div className="card-body">
            <h4 className="card-title">{animal.nazwa}</h4>
            <button type="button" className="btn btn-success" onClick={() => onAnimalSelect(animal.nazwa)}>Wybierz</button>
          </div>
        </div>
        ))}

      </div>
    </div>
  )
}

export default App