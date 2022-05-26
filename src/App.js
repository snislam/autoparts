import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import User from './Components/Pages/Dashboard/User';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Login/Register';
import ResetPassword from './Components/Pages/Login/ResetPassword';
import Purchase from './Components/Pages/Purchase/Purchase';
import Footer from './Components/Shared/Footer';
import Header from './Components/Shared/Header';
import NotFound from './Components/Shared/NotFound';
import RequireAuth from './Components/Shared/RequireAuth';
import { ToastContainer } from 'react-toastify';
import RequireAdmin from './Components/Shared/RequireAdmin';
import MyProfile from './Components/Pages/Dashboard/MyProfile';
import AddReview from './Components/Pages/Dashboard/AddReview';
import MyOrder from './Components/Pages/Dashboard/MyOrder';
import ManageAllOrder from './Components/Pages/Dashboard/ManageAllOrder';
import AddProduct from './Components/Pages/Dashboard/AddProduct';
import ManageProducts from './Components/Pages/Dashboard/ManageProducts';
import Payment from './Components/Pages/Dashboard/Payment';
import Blogs from './Components/Pages/Blogs/Blogs';
import MyPortfolio from './Components/Pages/MyPortfolio/MyPortfolio';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyProfile />} />
          <Route path='/dashboard/add-review' element={<AddReview />} />
          <Route path='/dashboard/my-order' element={<MyOrder />} />
          <Route path='/dashboard/payment/:id' element={<Payment />} />
          <Route path='/dashboard/users' element={<RequireAdmin><User /></RequireAdmin>} />
          <Route path='/dashboard/manage-orders' element={<RequireAdmin><ManageAllOrder /></RequireAdmin>} />
          <Route path='/dashboard/add-product' element={<RequireAdmin><AddProduct /></RequireAdmin>} />
          <Route path='/dashboard/manage-products' element={<RequireAdmin><ManageProducts /></RequireAdmin>} />
        </Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase /></RequireAuth>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/my-portfolio' element={<MyPortfolio />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
