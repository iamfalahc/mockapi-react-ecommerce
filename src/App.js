import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Categories from "./pages/Categories";
import ProductDetails from "./pages/ProductDetails";
import ProductsByCategory from "./pages/ProductsByCategory";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/categories" Component={Categories}/>
        <Route path="/products" Component={Products}/>
        <Route path="/users" Component={Users}/>
        <Route path="/products/:id" Component={ProductDetails}/>
        <Route path="/categories/:id/products" Component={ProductsByCategory}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
