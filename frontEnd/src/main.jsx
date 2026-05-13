import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import App from './App.jsx'
import Usuarios from './usuarios.jsx'
import Login from './components/Login.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Layout from './components/Layout.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import './index.css'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/usuarios" element={
            <ProtectedRoute>
              <Usuarios />
            </ProtectedRoute>
          } />
        </Route>
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
