import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Main_Course from "./components/Main_Course.jsx";
import Nutritious from "./components/Nutritious.jsx";
import Movie_nights from "./components/Movie_nights.jsx";
import Healthy_snack from "./components/Healthy_snack.jsx";
import Oil from "./components/Oil.jsx";
import Masala from "./components/Masala.jsx";
import Fast_food from "./components/Fast_food.jsx";
import Baby_essentials from "./components/Baby_essentials.jsx";

import Amul from "./components/Amul.jsx";
import Mother_dairy from "./components/Mother_dairy.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout.jsx";


function App() {
  return (
    <>
      <div className="parent-div">

        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Main_Course/>} />
            <Route path="/nutritious" element={<Nutritious/>} />
            <Route path="/movie_nights" element={<Movie_nights/>} />
            <Route path="/healthy_snack" element={<Healthy_snack/>} />
            <Route path="/oil" element={<Oil/>} />
            <Route path="/masala" element={<Masala/>} />
            <Route path="/fast_food" element={<Fast_food/>} />
            <Route path="/baby_essentials" element={<Baby_essentials/>} />
            <Route path="/amul" element={<Amul/>} />
            <Route path="/mother_dairy" element={<Mother_dairy/>} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;