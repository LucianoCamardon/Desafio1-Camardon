import './App.css'
import Navbar from "./components/navbar"
import ItemListContainer from './components/itemListContainer'

function App() {
  return(
    <main className="main">
      <Navbar />
      <ItemListContainer greetings="Bienvenidos a Ópalo"/>
    </main>
  ) 
}

export default App
