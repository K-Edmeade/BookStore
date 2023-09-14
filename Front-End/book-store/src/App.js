import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book from './pages/Book';
import Cart from './pages/Cart';
import Catalog from './pages/Catalog';
import Checkout from './pages/Checkout';
import Homepage from './pages/Homepage';
import OrderConfirmation from './pages/OrderConfirmation';
import OrderHistory from './pages/OrderHistory';
import User from './pages/User'


function App() {
  return (
    <BrowserRouter>
      <Routes>
       
          <Route path="/" element={<Homepage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation/id" element={<OrderConfirmation />} />
          <Route path="/order-history/:id" element={<OrderHistory />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
