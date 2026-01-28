import React from 'react'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './components/NavbarComp';
import FooterComp from './components/FooterComp';
import About from './pages/About';
import Projects from './pages/Projects';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import ProtectedRoute from './pages/ProtectedRoute';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
const App = () => {
  return (
    
    <div>
      <Router>
        <NavScrollExample/>
        <Routes>
          <Route path="/user/:userId" element={<UserProfile/>}/>
           <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          
          <Route path='login' element={<Login/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}>
            <Route path='profile' element={<Profile/>}/>
            <Route path='settings' element={<Settings/>}/>
          </Route>  

          <Route path='admin' element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        <FooterComp/>
      </Router>
    </div>
    
    
  )
}

export default App