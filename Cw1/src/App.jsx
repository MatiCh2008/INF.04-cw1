import "bootstrap/dist/css/bootstrap.css";

function App() {

  return (
    <div>
      <h2>Liczba kursów: 3</h2>
      <ol>
        <li>Programowanie w C#</li>
        <li>Angular dla początkujących</li>
        <li>Kurs Django</li>        
      </ol>

      <form>
        <div className="form-group">
          <label for="name-and-surname">Imię i nazwisko:</label>
          <input className="form-control" type="text" id="name-and-surname" />
        </div>
        <div className="form-group">
          <label for="course-number">Numer kursu:</label> 
          <input className="form-control" type="text" id="course-number" />         
        </div>        
      </form>
    </div>
  );
}

export default App;
