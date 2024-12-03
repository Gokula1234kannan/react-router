import logo from "./logo.svg";
import "./App.css";
import FirstPage from "./pages/home";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <>
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
      </div>
    </>
  );
}

export default App;
