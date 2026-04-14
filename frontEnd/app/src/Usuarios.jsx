import { useState, useEffect } from 'react'
import { Link } from "react-router";
function Usuarios() {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([]);



  useEffect(() => {
    async function obtenerDatos() {
      const response = await fetch(import.meta.env.VITE_API_URL + "/usuarios")
      const data = await response.json();

      setUsers(data);
      setLoading(false);
    }

    obtenerDatos();

  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <InicioPagina />
        <div className="spinner"></div>
        <FinPagina />
      </div>
    );
  }

  return (
    <div>
      <InicioPagina />
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <FinPagina />
    </div>
  )
}

function InicioPagina() {
  return (
    <>
      <h3>Listado de usuarios</h3>
    </>
  )
}

function FinPagina() {
  return (
    <>
      <p>&nbsp;</p>
      <Link to="/">Regresar a inicio</Link>
    </>
  )
}

export default Usuarios
