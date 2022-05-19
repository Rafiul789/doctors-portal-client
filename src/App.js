
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {
  return (
    <div className="max-w-7xl mx-auto" >
      <Navbar></Navbar>
    <Routes> <Route path='/' element={<Home></Home>}></Route> <Route path='/about' element={<About></About>}></Route>  <Route path="appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />  <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } />   <Route path='/login' element={<Login></Login>}></Route> </Routes>

<ToastContainer />

    </div>
  );
}

export default App;
