
const Kursy = (props) => {
    return <div>
      <h2>Liczba kursów: {props.kursy.length}</h2>
      {
        
      }
    </div>
}

const App = () => {

  const kursy = [
      "Programowanie w C#",
      "Angular dla początkujących",
      "Kurs Django"
  ]

  return (
    <div>
      <Kursy dane={kursy}/>
    </div>
  )
}

export default App