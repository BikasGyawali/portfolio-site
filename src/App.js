import "./App.css";

import Home from "./components/Home";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" exact element={<Home />}/>
      <Route path="/works" exact element={<Work />}/>
      <Route path="/contact" exact element={<Contact />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
