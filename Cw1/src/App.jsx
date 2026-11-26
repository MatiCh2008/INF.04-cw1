import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

const App = () => {

  const [cytaty, setCytaty] = useState([
    "Jedynym sposobem na wykonywanie świetnej pracy jest kochanie tego, co się robi.",
    "Sukces to suma niewielkiego wysiłku powtarzanego z dnia na dzień.",
    "Nie liczy się to, ile masz, ale to, ile dajesz innym i jak się z nimi dzielisz.",
    "Przyszłość należy do tych, którzy wierzą w piękno swoich marzeń.",
    "Najlepszy czas na zasadzenie drzewa był 20 lat temu. Drugi najlepszy czas jest teraz.",
    "Programowanie to nie pisanie kodu, to rozwiązywanie problemów."
  ])
  
  const [aktualnyCytat, setAktualnyCytat] = useState("")
  const [wyswietleniaCytatow, setWyswietleniaCytatow] = useState([
    0,
    0,
    0,
    0,
    0,
    0
  ])

  return (
    <div>
      <h2>Losowe cytaty</h2>
    </div>
  )
}

export default App