import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
import Navbar from './layout/Navbar'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/About" element={<About />}/>
          <Route exact path="/Contact" element={<Contact />}/>
          <Route exact path="/AddUser" element={<AddUser name='Asim' />}/>
          <Route exact path="/EditUser" element={<EditUser />}/>
      </Routes>
     
      
    </div>
    <ToastContainer />
    </Router>
  );
}

export default App;