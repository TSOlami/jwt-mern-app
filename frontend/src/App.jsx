import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Resources from './pages/Resources';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Landing/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/resources' element={<Resources/>} />
    </Routes>
    </BrowserRouter>    
  )
}