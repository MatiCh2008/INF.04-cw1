import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const App = () => {

  const [osoby, setOsoby] = useState([
    "Anna Kowalska",
    "Jan Nowak",
    "Katarzyna Wiśniewska",
    "Piotr Wójcik",
    "Małgorzata Kowalczyk",
    "Krzysztof Kamiński",
    "Agnieszka Lewandowska",
    "Andrzej Zieliński",
    "Barbara Szymańska",
    "Tomasz Woźniak",
    "Ewa Dąbrowska",
    "Paweł Kozłowski",
    "Magdalena Jankowska",
    "Michał Mazur",
    "Elżbieta Kwiatkowska",
    "Marcin Krawczyk",
    "Joanna Piotrowska",
    "Jakub Grabowski",
    "Aleksandra Nowakowska",
    "Adam Pawłowski",
    "Monika Michalska",
    "Łukasz Nowicki",
    "Natalia Adamczyk",
    "Mateusz Dudek",
    "Karolina Zając",
    "Grzegorz Wieczorek",
    "Beata Jabłońska",
    "Marek Król",
    "Sylwia Majewska",
    "Rafał Olszewski"
  ]);
  
  const [szukaj, setSzukaj] = useState("")
  const [przefiltrowaneOsoby, setPrzefiltrowaneOsoby] = useState(osoby)

  const onSzukajChange = (event) => {
    const wpisanyTekst = event.target.value;
    setSzukaj(wpisanyTekst)

    const wyniki = osoby.filter((osoba) =>
    osoba.toLowerCase().includes(wpisanyTekst.toLowerCase())
  );

    setPrzefiltrowaneOsoby(wyniki);

    console.log(`Wyniki: ${wyniki.length}`);

  }

  const onWyczyscClick = () => {
    setSzukaj('');
    setPrzefiltrowaneOsoby(osoby)
    console.log(`Wyniki: ${osoby.length}`);
  }

  return (
    <div>
      <h2>Wyszukiwarka nazwisk</h2>
      <label htmlFor='szukaj' className='form-label'>Szukaj: </label>
      <div className='input-group'>
        <input type='text' className='form-control' id='szukaj' onChange={onSzukajChange} value={szukaj}/>
        <button type='button' className='btn btn-outline-secondary' onClick={onWyczyscClick}>Wyczyść</button>
      </div>
      <p>Liczba wyników: {przefiltrowaneOsoby.length}</p>
      {przefiltrowaneOsoby.length > 0 ? (
        <ol className='list-group list-group-numbered'>
          {przefiltrowaneOsoby.map(osoba => (<li key={osoba} className='list-group-item'>{osoba}</li>))}
        </ol>        
      ) : (
        <div className='alert alert-warning' role='alert'>Brak wyników</div>
      )}


    </div>
  )
}

export default App