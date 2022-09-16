// import Nav from "./components/Nav";
import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import Navigation from "./components/navigation";
import "./index.css";
import About from "./screens/About";
import Services from "./screens/Services";
import Clients from "./screens/Clients";
import Error10 from "./components/Error";
import Contact from "./screens/Contact";
import Login from "./screens/Login";
import Space from "./components/Space";
import { AnimatePresence } from "framer-motion";



export default function App() {
  const location = useLocation();

  return (
    <Suspense fallback={null}> 
    <Navigation />
        <Space />
      <AnimatePresence exitBeforeEnter>
       
        <Routes key={location.pathname} location={location}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/clients" element={<Clients />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="*" element={<Error10 />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </Suspense>
  );
}
