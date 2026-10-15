import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState();
  const [category, setCategory] = useState();

    const [categories, setCategoriesd] = useState([
    'Komedia',
    'Obyczajowy',
    'Sensacyjny',
    'Horror'
  ]);

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const onCategoryChange = (event) => {
    setCategory(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Tytuł: ", title, " rodzaj: ", categories[category-1])
  }

  return (
<form onSubmit={onSubmit}> 
  <div className="form-group">
    <label htmlFor="filmTitle" className="form-label">Tytuł filmu</label> 
    <input type="text" className="form-control" id="InputTitle" onChange={onTitleChange}/>
  </div> 
  <div className="form-group">
    <label htmlFor="filmCategory" className="form-label">Rodzaj</label>
    <select className="form-control" id="SelectCategory" onChange={onCategoryChange}>
      <option value=""></option>
      <option value="1">Komedia</option>  
      <option value="2">Obyczajowy</option>   
      <option value="3">Sensacyjny</option>   
      <option value="4">Horror</option>                       
    </select>
  </div> 
  <button type="submit" className="btn btn-primary">Success</button>
</form>
  )
}

export default App