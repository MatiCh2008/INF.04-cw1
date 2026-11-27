import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const App = () => {

  const [czyKwiaty, setCzyKwiaty] = useState(true)
  const [czyZwierzeta, setCzyZwierzeta] = useState(true)  
  const [czySamochody, setCzySamochody] = useState(true)    

  const [zdjecia, setZdjecia] = useState([
    {id: 0, alt: "Mak", filename: "obraz1.jpg", category:1, downloads: 35},
    {id: 1, alt:"Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43},
    {id: 2, alt:"Dalmatyńczyk", filename: "obraz3.jpg", category:2, downloads: 2},
    {id: 3, alt:"Świnka morska", filename: "obraz4.jpg", category:2, downloads: 53},
    {id: 4, alt:"Rotwailer", filename: "obraz5.jpg", category:2, downloads: 43},
    {id: 5, alt:"Audi", filename: "obraz6.jpg", category:3, downloads: 11},
    {id: 6, alt:"kotki", filename: "obraz7.jpg", category:2, downloads: 22},
    {id: 7, alt:"Róża", filename: "obraz8.jpg", category:1, downloads: 33},
    {id: 8, alt:"Świnka morska", filename: "obraz9.jpg", category:2, downloads: 123},
    {id: 9, alt:"Foksterier", filename: "obraz10.jpg", category:2, downloads: 22},
    {id: 10, alt:"Szczeniak", filename: "obraz11.jpg", category:2, downloads: 12},
    {id: 11, alt:"Garbus", filename: "obraz12.jpg", category:3, downloads: 321}
])

  const filteredZdjecia = zdjecia.filter(p => {
    if (p.category === 1 && czyKwiaty){
      return true;
    } else if (p.category === 2 && czyZwierzeta) {
      return true;
    } else if (p.category === 3 && czySamochody) {
      return true;
    }

    return false;
  })

  function updateDownloads(id) {
    const noweZdjecia = [...zdjecia]

    for (const p of noweZdjecia){
      if (p.id === id){
        p.downloads++;
        break;
      }
    }

    setZdjecia(noweZdjecia)
  }



  return (
    <div>
      <h2>Kategorie zdjęć</h2>
      <div className='form-check form-check-inline form-switch'> 
        <input className='form-check-input' type='checkbox' id='kwiaty' checked={czyKwiaty} onChange={() => setCzyKwiaty(!czyKwiaty)}/> 
        <label className='form-check-label' htmlFor='kwiaty'>Kwiaty</label> 
      </div>
      <div className='form-check form-check-inline form-switch'> 
        <input className='form-check-input' type='checkbox' id='zwierzeta' checked={czyZwierzeta} onChange={() => setCzyZwierzeta(!czyZwierzeta)}/> 
        <label className='form-check-label' htmlFor='zwierzeta'>Zwierzęta</label>
      </div>
      <div className='form-check form-check-inline form-switch'>        
        <input className='form-check-input' type='checkbox' id='samochody' checked={czySamochody} onChange={() => setCzySamochody(!czySamochody)}/> 
        <label className='form-check-label' htmlFor='samochody'>Samochody</label>       
      </div>

      <div className='row'>
        {filteredZdjecia.map(p => (
          <div key={p.id} className='col'>
            <img src={"/assets/" + p.filename} alt={p.alt} className='rounded' style={{margin: "5px"}} />
            <h4>Pobrań: {p.downloads}</h4>
            <button className='btn btn-success' onClick={() => updateDownloads(p.id)}>Pobierz</button>
          </div>
        ))}
      </div>

      
    </div>
  )
}

export default App