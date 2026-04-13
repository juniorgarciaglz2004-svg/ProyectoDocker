import { useState } from 'react'
import {Link} from "react-router";
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <h1>inicio</h1>
        
        <Link to="/usuarios">Usuarios</Link>
        
    </div>
  )
}

export default App