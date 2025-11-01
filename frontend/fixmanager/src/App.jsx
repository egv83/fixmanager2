// import { useState } from 'react'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './components/login.jsx';
import CreateUser from './components/CreateUser.jsx';

import './App.css'




function App() {
  //const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
          <div className="app-container">
              <Routes>
                  {/*<Route path="/login" element={<Login />} />*/}
                  {/*<Route path="/" element={<Navigate to="/login" replace />} />*/}
                  <Route path="/CreateUser" element={<CreateUser />} />
                  <Route path="/" element={<Navigate to="/CreateUser" replace />} />
              </Routes>
          </div>
      </BrowserRouter>
  )
}

export default App
