import { useState } from 'react'
import {Link} from "react-router";
function Usuarios() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <h1>usuarios</h1>
       <Link to="/">Regresar a inicio</Link>
    </div>
  )
}

export default Usuarios
