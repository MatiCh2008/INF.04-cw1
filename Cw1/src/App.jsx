import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const App = () => {

  const [gatunki, setGatunki] = useState([
  'Dramat',
  'Komedia',
  'Akcja',
  'Horror',
  'Sci-Fi'
  ])

  const [dodaneFilmy, setDodaneFilmy] = useState([])

  const [tytul, setTytul] = useState('')
  const [gatunek, setGatunek] = useState('')
  const [ocena, setOcena] = useState('')

  const onTytulChange = (event) => {
    setTytul(event.target.value)
  }

  const onGatunekChange = (event) => {
    setGatunek(event.target.value)
  }

  const onOcenaChange = (event) => {
    setOcena(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const nowyFilm = {tytul: tytul, gatunek: gatunek, ocena: ocena}

    if (!dodaneFilmy.some((f) => f.tytul.toLowerCase() === tytul.toLowerCase())){
      const nowyFilm = {tytul: tytul, gatunek: gatunek, ocena: ocena}

      setTytul('')
      setGatunek('')
      setOcena('')

      setDodaneFilmy([...dodaneFilmy, nowyFilm])
      console.log(nowyFilm)        
    }
    else{
      console.log('Film już istnieje na liście')
    }

  }

  return (
    <div>
      <h2>Lista filmów do obejrzenia</h2>

      <form onSubmit={onSubmit}>
        <div className='mb-3'>
          <label htmlFor='tytul' className='form-label'>Tytuł: </label>
          <input type='text' className='form-control' id='tytul' onChange={onTytulChange} value={tytul}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='gatunek' className='form-label'>Gatunek: </label>
          <select className='form-select' id='gatunek' onChange={onGatunekChange} value={gatunek}>
            <option value=''></option>
            {gatunki.map((gatunek) => (<option value={gatunek} key={gatunek}>{gatunek}</option>))}
          </select>
        </div>

        <div className='mb-3'>
          <label className='form-label'>Ocena: </label>
          <div>
            {['1', '2', '3', '4', '5'].map((num) => (
              <div className='form-check form-check-inline' key={num}>
                <input 
                  className='form-check-input' 
                  type='radio' 
                  name='ocena' 
                  id={`ocena${num}`} 
                  value={num} 
                  checked={ocena === num} // Kluczowe dla synchronizacji stanu z widokiem
                  onChange={onOcenaChange}
                />
                <label className='form-check-label' htmlFor={`ocena${num}`}>{num}</label>      
              </div>
            ))}
          </div>
        </div>    
        <p></p>    
        <button type='submit' className='btn btn-primary'>Dodaj</button>   
        <p></p>
        <div>
          <ul className='list-group'>
            {dodaneFilmy.map((film) => (<li className='list-group-item' key={film.tytul}>{film.tytul} - {film.gatunek} - Ocena: {film.ocena}</li>))}
          </ul>

        </div>


      </form>      
    </div>


  )
}

export default App