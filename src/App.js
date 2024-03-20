import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import UserNav from './Users/UserNav';
import UserHome from './Users/UserHome';
import UserRegistration from './Users/UserRegistration';
import UserLogin from './Users/UserLogin';
import AdminNav from './Admin/AdminNav';
import AdminHome from './Admin/AdminHome';
import AdminLogin from './Admin/AdminLogin';
import ViewProducts from './Users/ViewProducts';
import ManageProducts from './Admin/ManageProducts';
import ContactUs from './Users/ContactUs';
import ManageOrders from './Admin/ManageOrders';
import Notification from './Users/Notification';
import ShoppingCart from './Users/ShoppingCart';
import AddProduct from './Admin/AddProduct';
import UserProfile from './Users/UserProfile';
import UserFooter from './Users/UserFooter';
import Payment from './Users/Payment';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/Adminnav" element={<AdminNav/>}/>
        <Route path="/Adminhome" element={<AdminHome/>}/>
        <Route path="/Adminlogin" element={<AdminLogin/>}/>
        <Route path="/Manageproducts" element={<ManageProducts/>}/>
        <Route path='/Manageorders' element={<ManageOrders/>}/>
        <Route path="/Addproduct" element={<AddProduct/>}/>
        

        <Route path='/Usernav' element={<UserNav/>}/>
        <Route path='/userfooter' element={<UserFooter/>}/>
        <Route path="/Userhome" element={<UserHome/>}/>
        <Route path ='/Userregistration' element={<UserRegistration/>}/>
        <Route path="/Userlogin" element={<UserLogin/>}/>
        <Route path="/Viewproducts" element={<ViewProducts/>}/>
        <Route path="/Notification" element={<Notification/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/shoppingcart' element={<ShoppingCart/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/Payment' element={<Payment/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
