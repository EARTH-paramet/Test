import "./App.scss";

import { NavLink } from "react-router-dom";
import { Route, Routes, Switch } from "react-router-dom";
import Scanner from "./components/Scanner";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/scan" element={<Scanner />} />
        <Route path="/add_product" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;

{
  /* <div className="row">
        <div className="col-6">
          <h3>APP NAME</h3>
        </div>
        <div className="col-6">
          <h3 className="float-end">#</h3>
        </div>
      </div>
      <div className="row  option-menu">
        <div className="col-2 text-center">
          <p>Home</p>
        </div>
        <div className="col-2 text-start">
        <p>Fridge</p>
        </div>
        <div className="col-4 text-start">
        <p>center</p>
        </div>
        
        <div className="col-2 text-end">
        <p>CATEGORY</p>
        </div>
        <div className="col-2 text-center">
        <p>Profile</p>
        </div>
      </div> */
}
