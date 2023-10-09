import './App.css';
import { NavBar } from './components/NavBar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import {Home} from './pages/Home'
import {Information} from './pages/Information'
import {Products} from './pages/Products'
import {Services} from './pages/Services'
import {Contact} from './pages/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Information' element={<Information/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
