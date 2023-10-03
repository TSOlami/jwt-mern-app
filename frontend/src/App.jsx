import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing, SignIn, SignUp, PaymentForm } from './pages';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Landing/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/paymentform' element={<PaymentForm/>} />
    </Routes>
    </BrowserRouter>    
  )
}