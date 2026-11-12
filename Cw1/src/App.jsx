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

  const onSubmit = () => {

  }

  return (
    <div>
      <h2>Lista filmów do obejrzenia</h2>

      <form onSubmit={onSubmit}>
        <div className='mb-3'>
          <label htmlFor='tytul' className='form-label'>Tytuł: </label>
          <input type='text' className='form-control' id='tytul'/>
        </div>
        <div className='mb-3'>
          <label htmlFor='gatunek' className='form-label'>Gatunek: </label>
          <select className='form-select' id='gatunek'>
            <option value=''></option>
            {gatunki.map((gatunek) => (<option value={gatunek} key={gatunek}>{gatunek}</option>))}
          </select>
        </div>

      </form>      
    </div>


  )
}

export default App