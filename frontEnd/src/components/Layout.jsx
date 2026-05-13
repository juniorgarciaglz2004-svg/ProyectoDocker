import { Link } from 'react-router';
import { Outlet } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

function Layout() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <div>
      <header style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px 20px', 
        borderBottom: '1px solid #dee2e6',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <Link to="/" style={{ textDecoration: 'none', color: '#007bff', fontSize: '20px', fontWeight: 'bold' }}>
            Mi App
          </Link>
        </div>
        <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link 
            to="/" 
            style={{ 
              textDecoration: 'none', 
              color: '#495057', 
              fontSize: '16px',
              padding: '5px 10px',
              borderRadius: '4px',
              transition: 'background-color 0.2s'
            }}
          >
            Inicio
          </Link>
          <Link 
            to="/usuarios" 
            style={{ 
              textDecoration: 'none', 
              color: '#495057', 
              fontSize: '16px',
              padding: '5px 10px',
              borderRadius: '4px',
              transition: 'background-color 0.2s'
            }}
          >
            Usuarios
          </Link>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {isAuthenticated ? (
            <>
              <span style={{ color: '#6c757d' }}>
                Logeado como: <b>{user}</b>
              </span>
              <button 
                onClick={logout}
                style={{ 
                  padding: '6px 12px', 
                  backgroundColor: '#dc3545', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '4px', 
                  cursor: 'pointer'
                }}
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <Link 
              to="/login"
              style={{ 
                padding: '6px 12px', 
                backgroundColor: '#007bff', 
                color: 'white', 
                textDecoration: 'none',
                borderRadius: '4px'
              }}
            >
              Iniciar Sesión
            </Link>
          )}
        </div>
      </header>
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
