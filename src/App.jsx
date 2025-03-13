import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Component/Home'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import AdminPanel from './Component/Admin/Login'
import AdminDashboard from './Component/Admin/AdminPanel'
import ManageUser from './Component/Admin/ManageUser'

import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Theme
import 'primereact/resources/primereact.min.css';  // Core CSS
import 'primeicons/primeicons.css';  // Icons

function App() {

  return (
<Router>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/admin' element={<AdminPanel/>}/>
    <Route path='/manageUser' element={<ManageUser/>}/>
    <Route path='/admindashboard' element={<AdminDashboard/>}/>
  </Routes>
</Router>
  )
}

export default App
