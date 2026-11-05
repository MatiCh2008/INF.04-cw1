import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const App = () => {

  const [kategoria, setKategoria] = useState()
  const [kwota, setKwota] = useState()  
  const [data, setData] = useState()   
  const [wydatki, setWydatki] = useState([])

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(`kategoria: ${kategoria}; kwota: ${kwota}; data: ${data}`)
    const nowyWydatek = {
      kategoria: kategoria,
      kwota: kwota,
      data: data
    }
    setWydatki([...wydatki, nowyWydatek])
  }

  const onKategoriaChange = (event) => {
    setKategoria(event.target.value)
  }

  const onKwotaChange = (event) => {
    setKwota(event.target.value)
  }

  const onDataChange = (event) => {
    setData(event.target.value)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="kategoriaWydatku" className="form-label">Kategoria wydatku</label>
          <input type="text" className="form-control" id="kategoriaWydatku" onChange={onKategoriaChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="kwota" className="form-label">Kwota</label>
          <input type="number" className="form-control" id="kwota" min="0" step="0.01" onChange={onKwotaChange}/>          
        </div>
        <div className="mb-3">
          <label htmlFor="data" className="form-label">Data</label>
          <input type="date" className="form-control" id="data" onChange={onDataChange}/>          
        </div>
        <button type="submit" className="btn btn-primary">Dodaj</button>
      </form>

      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col">Kategoria</th>
            <th scope="col">Kwota</th> 
            <th scope="col">Data</th>                        
          </tr>
        </thead>
        <tbody>
          {wydatki.map((wydatek, indeks) => (
            <tr key={indeks}>
              <td>{wydatek.kategoria}</td>
              <td>{wydatek.kwota}</td>    
              <td>{wydatek.data}</td>                            
            </tr>
          ))}
        </tbody>
      </table>

    </div>

  )
}

export default App