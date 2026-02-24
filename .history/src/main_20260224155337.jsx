import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import ProjectDetail from './ProjectDetail.jsx' // Tu nuevo archivo
import './index.css'
import './i18n'; //

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* La ruta principal "/" cargará tu landing page */}
        <Route path="/" element={<App />} />
        
        {/* Esta ruta cargará la plantilla cuando entres a /projects/1, /projects/2, etc. */}
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)