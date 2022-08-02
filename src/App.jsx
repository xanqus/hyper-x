import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import AuthRoutes from './pages/auth/AuthRoutes'
import Home from './pages/Home'
import Login from './pages/Login'
import { authenticatedState } from './pages/recoil/store'
import WorkSpace from './pages/WorkSpace'
const About = lazy(() => import('./pages/About'))
const Users = lazy(() => import('./pages/Users'))

const App = () => {
  const [authenticated, setAuthenticated] = useRecoilState(authenticatedState)

  return (
    <Router>
      <Suspense fallback={<p>loading...</p>}>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}

        {authenticated ? (
          <Link
            to="/"
            onClick={() => {
              setAuthenticated(false)
            }}
          >
            로그아웃
          </Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route element={<AuthRoutes />}>
            <Route path="/workspace/*" element={<WorkSpace />} />
            <Route path="/users" element={<Users />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
