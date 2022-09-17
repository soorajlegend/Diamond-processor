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
import ScrollToTop from "./components/scrollToTop";
import Dashboard from "./screens/controlPanel/Dashboard";
import { useSelector } from 'react-redux';
import { selectControlAccess } from './slices/infoSlice';
import Info from "./screens/controlPanel/Info";
import AboutCompany from "./screens/controlPanel/AboutCompany";
import ServicesControl from "./screens/controlPanel/ServicesControl";
import WhyUs from "./screens/controlPanel/WhyUs";
import ClientControl from "./screens/controlPanel/ClientsControl";


export default function App() {

const admin = useSelector(selectControlAccess);


  const location = useLocation();

  return (
    <Suspense fallback={null}> 
    { !admin && <Navigation />}
        {!admin && <Space />}
      <AnimatePresence exitBeforeEnter>
       <ScrollToTop />
        <Routes key={location.pathname} location={location}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/clients" element={<Clients />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/controlpanel" element={<Dashboard />} />
          <Route exact path="/controlpanel/info" element={<Info />} />
          <Route exact path="/controlpanel/about" element={<AboutCompany />} />
          <Route exact path="/controlpanel/services" element={<ServicesControl />} />
          <Route exact path="/controlpanel/why-us" element={<WhyUs />} />
          <Route exact path="/controlpanel/clients" element={<ClientControl />} />
          <Route exact path="/controlpanel/gallery" element={<Info />} />
          <Route exact path="/controlpanel/messages" element={<Info />} />
          <Route exact path="/controlpanel/setting" element={<Info />} />
          <Route exact path="*" element={<Error10 />} />
        </Routes>
      </AnimatePresence>

     { !admin && <Footer />}
    </Suspense>
  );
}
