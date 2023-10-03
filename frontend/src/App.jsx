import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing, SignIn, SignUp } from './pages';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Landing/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
    </Routes>
    </BrowserRouter>    
  )
}