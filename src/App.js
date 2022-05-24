import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Login/Register';
import ResetPassword from './Components/Pages/Login/ResetPassword';
import Purchase from './Components/Pages/Purchase/Purchase';
import Footer from './Components/Shared/Footer';
import Header from './Components/Shared/Header';
import NotFound from './Components/Shared/NotFound';
import RequireAuth from './Components/Shared/RequireAuth';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path='/purchase/:id' element={<RequireAuth><Purchase /></RequireAuth>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
