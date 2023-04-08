
import './App.css'
import Calendar from './assets/components/Calendar'

function App() {
const now = new Date(2017, 2, 8);

  return (
    <Calendar date={now} />
  )
}

export default App
