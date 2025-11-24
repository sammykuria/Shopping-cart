import './App.css';
import { Routes, Route } from 'react-router-dom';
import CartPage from './Components/CartPage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
     
     <Routes>
      <Route path='/' element={<CartPage />} />
     </Routes>
    </div>
  );
}

export default App;
