import "bootstrap/dist/css/bootstrap.css";

import { use, useState } from "react";

function App() {

  const [courses, setCourses] = useState([
    'Programowanie w C#',
    'Angular dla początkujących',
    'Kurs Django'
  ]);

  const [nameAndSurname, setNameAndSurname] = useState();
  const [courseNumber, setCourseNumber] = useState();

  const onNameAndSurnameChange = (event) => {
    setNameAndSurname(event.target.value);
  };

  const onCourseNumberChange = (event) => {
    setCourseNumber(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(nameAndSurname);
    if(courses[courseNumber - 1]) {
      console.log(courses[courseNumber-1]);
    } else {
      console.log("Nieprawidłowy numer kursu");
    }

  }

  return (
    <div>
      <h2>Liczba kursów: {courses.length}</h2>
      <ol>
        {courses.map(course => <li key={course}>{course}</li>)}
      </ol>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name-and-surname">Imię i nazwisko:</label>
          <input 
          onChange={onNameAndSurnameChange}
          className="form-control" 
          type="text" 
          id="name-and-surname" />
        </div>
        <div className="form-group">
          <label htmlFor="course-number">Numer kursu:</label> 
          <input onChange={onCourseNumberChange} className="form-control" type="number" id="course-number" />         
        </div>       

        <button className="btn btn-primary">Zapisz do kursu</button> 
      </form>
    </div>
  );
}

export default App;
