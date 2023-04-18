import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import ProductDesc from './screens/ProductDesc';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Homescreen />} />
        <Route path='/cart' element={<CartScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/product/:id' element={<ProductDesc />} />
      </Routes>
    </div>
  );
}

export default App;
