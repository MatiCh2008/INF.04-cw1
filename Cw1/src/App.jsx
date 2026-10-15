import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
<form> 
  <div className="form-group">
    <label htmlForfor="exampleInputEmail1">Email address</label> 
    <input type="email" className="form-control" id="exampleInputEmail1" />
  </div> 
  <div className="form-group">
    ... 
  </div> 
  <button type="button" class="btn btn-success">Success</button>
</form>
  )
}

export default App