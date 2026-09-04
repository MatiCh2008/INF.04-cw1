
const Kursy = (props) => {
    return <div>
      <h2>Liczba kursów: </h2>
      {
        props.dane[1]
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