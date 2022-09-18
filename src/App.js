import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MyBag from "./pages/MyBag";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="bag" element={<MyBag/>}/>
          <Route path="product" element={<Product/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="checkout" element={<Checkout/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
