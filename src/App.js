// import Nav from "./components/Nav";
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./screens/Home";
import Footer from './components/Footer';
import Navigation from './components/navigation';
import './index.css';
import { Provider } from "react-redux";
import { store } from './store';
import About from './screens/About';
import Services from './screens/Services';
import Clients from './screens/Clients';
import Error10 from './components/Error';
import Contact from './screens/Contact';
import Login from './screens/Login';
import Space from './components/Space';

export default function App() {
  return (
   <Provider store={store}>
    <Suspense fallback={null}>
    <div>
<Router>
<Navigation/>
<Space />
{/* <Nav /> */}
  <Routes>
 
    <Route  exact path="/" element={<Home /> }/>
    <Route  exact path="/about" element={<About /> }/>
    <Route  exact path="/services" element={<Services /> }/>
    <Route  exact path="/clients" element={<Clients /> }/>
    <Route  exact path="/contact" element={<Contact /> }/>
    <Route  exact path="/login" element={<Login /> }/>
    <Route  exact path="*" element={<Error10 /> }/>
  </Routes>
</Router>

      <Footer />
  </div>
    </Suspense>
  </Provider>
 
  );
}


















