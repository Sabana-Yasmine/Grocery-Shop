//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from './UserManagement/Register';
import Login from './UserManagement/Login';
import ChangePass from './UserManagement/ChangePass';
import Signup from './AdminManagement/Signup';
import Signin from './AdminManagement/Signin';
import Frogotpass from './AdminManagement/Forgotpass.admin';
import Home from './Home/Home'
import ProductDetails from './ProductManagement/AdminRoute';
import ProductList from './ProductManagement/UserRoute';
import Dash from './Home/Dashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/home" element ={<Home/>}/>
        <Route path = "/register" element = {<Register/>}/>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/changepass" element = {<ChangePass/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/signin" element = {<Signin />}/>
        <Route path = "/forgotpass" element = {<Frogotpass/>}/>
        <Route path = "/productdetails" element = {<ProductDetails/>}/>
        <Route path = "/productlist" element={<ProductList/>}/>
        <Route path = "/dashboard" element={<Dash/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
