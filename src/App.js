import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/common/Navbar";
import PopUp from "./components/PopUp";
import AddTag from "./pages/AddTag";
import Cupons from "./pages/Cupons/Cupons";
import Home from "./pages/Home";
import SignIn from "./pages/LogIn";
import OrderHistory from "./pages/Order/OrderHistory";
import Productos from "./pages/Productos";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/add-tag" element={<AddTag />} />
          <Route path="/pop" element={<PopUp />} />
          <Route exact path="/order-history" element={<OrderHistory />} />
          <Route exact path="/cupons" element={<Cupons />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
