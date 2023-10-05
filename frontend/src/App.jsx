import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Landing, SignIn, SignUp, } from './pages';
import SignIn from './pages/SignIn';
import SignUp from './pages/Signup';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Resources from './pages/Resources';
import PaymentPage from './pages/PaymentPage';
import Profile from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Landing/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/paymentform' element={<PaymentPage/>} />
      {/* <Route path='/signup' element={<Signup/>} /> */}
      <Route path='/home' element={<Home/>} />
      <Route path='/resources' element={<Resources/>} />
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>    
  )
}