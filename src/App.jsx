
import CharacterList from "./components/CharacterList";
import Character from "./components/Character";

function App() {


  
  
  
  return (
    <div className="app-container">
      <h1>Rick and Morty</h1>
      <button  className="btn-prev">Prev</button>
      <button  className="btn-next">Next</button>
      <CharacterList/>
      
      
    </div>
  )
}

export default App