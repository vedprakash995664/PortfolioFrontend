import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Component/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import About from './Component/About';
function App() {

  return (
<Router>
  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>
</Router>
  )
}

export default App
