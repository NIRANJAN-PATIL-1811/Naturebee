import "./App.css";

import Navbar from "./components/Pages/Navbar.jsx";
import Mycontext from "./Mycontext.jsx";
import Mycontext2 from "./Mycontext2.jsx";
import Main_Course from "./components/Pages/Main_Course.jsx";
import Footer from "./components/Pages/Footer.jsx";
import PageNotFound from "./components/Pages/PageNotFound.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";


// All Pages
import FreshProduce from "./components/Pages/FreshProduce.jsx";
import CheckOut from "./components/Pages/CheckOut.jsx";
import DairyProducts from "./components/Pages/DairyProducts.jsx";
import MeatAndPoultry from "./components/Pages/MeatAndPoultry.jsx";


function App() {
  return (
    <>
      <Mycontext>
        <Mycontext2>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Main_Course/>} />
              <Route path="/fresh produce" element={<FreshProduce image_path={'./freshproduce'} />} />
              <Route path="/dairy products" element={<DairyProducts image_path={'./dairyproducts'} />} />
              <Route path="/meat & poultry" element={<MeatAndPoultry image_path={'./meatandpoultry'}/>} />
              <Route path="/grains" element={<></>} />
              <Route path="/cereals & pulses" element={<></>} />
              <Route path="/bakery & baked goods" element={<></>} />
              <Route path="/frozen foods" element={<></>} />
              <Route path="/snacks & beverages" element={<></>} />
              <Route path="/dry fruits & nuts" element={<></>} />
              <Route path="/oils & condiments" element={<></>} />
              <Route path="/spices & seasonings" element={<></>} />
              <Route path="/ready to eat&instant foods" element={<></>} />
              <Route path="/baby food&essentials" element={<></>} />
              <Route path="/checkout" element={<CheckOut/>} />
              <Route path="*" element={<PageNotFound/>} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </Mycontext2>
      </Mycontext>
    </>
  );
}

export default App;