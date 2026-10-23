import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const App = () => {

  const [ageGrups, setAgeGroups] = useState([
    {value: '1', name: 'do 18 lat'},
    {value: '2', name: '19-30 lat'},
    {value: '3', name: 'powyżej 30 lat'}
  ])

  const [ratings, setRatings] = useState([
    '1',
    '2',
    '3',
    '4',
    '5'
  ])

  const [interests, setInterests] = useState([
    'Programowanie',
    'Grafika',
    'Sieci'
  ])

  const [ageGroup, setAgeGroup] = useState('')
  const [rating, setRating] = useState('')
  const [chosenInterests, setChosenInterests] = useState([])
  const [remarks, setRemarks] = useState('')  


  const onAgeGroupChange = (event) => {
    setAgeGroup(event.target.value)
  }

  const onRatingChange = (event) => {
    setRating(event.target.value)
  }

  const onInterestChange = (event) => {
    const { value, checked } = event.target
    if (checked) {
      setChosenInterests([...chosenInterests, value])
    } else {
      setChosenInterests(chosenInterests.filter((interest) => interest !== value))
    }
  }

  const onRemarksChange = (event) => {
    setRemarks(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    console.log({grupa: ageGroup, ocena: rating, zainteresowania: chosenInterests, uwagi: remarks})
    setAgeGroup('')
    setRating('')
    setChosenInterests([])
    setRemarks('')
  }

  return (
    <div>
      <h2>Ankieta zajęć</h2>
      <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="grupaWiekowa" className="form-label">Grupa wiekowa: </label>
        <select className="form-select" id="grupaWiekowa" value={ageGroup} onChange={onAgeGroupChange}>
          <option value=""></option>
          {ageGrups.map(group => (<option value={group.value} key={group.value}>{group.name}</option>))}
        </select>
      </div>
        <div className="mb-3">
          <span className="form-label d-block">Ocena zajęć:</span> 

        {ratings.map(value => (
          <div key={value} className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="ocena"
              id={`ocena${value}`}
              value={value}
              checked={rating === value}
              onChange={onRatingChange}
            />
            <label className="form-check-label" htmlFor={`ocena${value}`}>{value}</label>
          </div>
        ))}

        </div>
        <div className="mb-3">
          <span className="form-label d-block">Zainteresowania:</span>   
                  {interests.map(value => (
          <div key={value} className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="zainteresowanie"
              id={value}
              value={value}
              checked={chosenInterests.includes(value)}
              onChange={onInterestChange}
            />
            <label className="form-check-label" htmlFor={value}>{value}</label>
          </div>
        ))}

        </div>
        <div className="mb-3">
          <label htmlFor="uwagi" className="form-label">Uwagi: </label>
          <textarea
            className="form-control"
            id="uwagi"
            rows="3"
            value={remarks}
            onChange={onRemarksChange}
          >

          </textarea>
        </div>
        <button type="submit" className="btn btn-primary">Wyślij</button>
        </form>
        
    </div>
  )
}

export default App