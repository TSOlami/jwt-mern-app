import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing, SignIn, SignUp, Home, Resources, Payment, Profile } from './pages';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Landing/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/paymentform' element={<Payment/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/resources' element={<Resources/>} />
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>    
  )
}