import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import App from './App.jsx'
import Usuarios from './usuarios.jsx'
import './index.css'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route index  element={<App />} />
      <Route path="/usuarios" element={<Usuarios />} />
    </Routes>
  </BrowserRouter>
);
