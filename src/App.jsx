import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthRoute from './pages/auth/AuthRoute'
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import Users from './pages/Users'

const App = () => {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
