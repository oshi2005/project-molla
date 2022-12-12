import "./App.css";
import Homes from "./pages/Homes";
import { Routes, Route, Outlet } from "react-router-dom";
import ProductPages from "./Components/ProductPages";
import Form from "./Components/Form";
import ProductCart from "./Components/Header/ProductCart";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homes />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/productPages" element={<ProductPages />}></Route>
        <Route path="/cart" element={<ProductCart />}></Route>
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
