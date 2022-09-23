// import Nav from "./components/Nav";
import React, { Suspense } from "react";
import {
  BrowserRouter as 
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./screens/Home";
import "./index.css";
import About from "./screens/About";
import Services from "./screens/Services";
import Clients from "./screens/Clients";
import Error10 from "./components/Error";
import Contact from "./screens/Contact";
import Login from "./screens/Login";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/scrollToTop";
import Dashboard from "./screens/controlPanel/Dashboard";
import AboutCompany from "./screens/controlPanel/AboutCompany";
import ServicesControl from "./screens/controlPanel/ServicesControl";
import WhyUs from "./screens/controlPanel/WhyUs";
import ClientControl from "./screens/controlPanel/ClientsControl";
import GalleryControl from "./screens/controlPanel/galleryControl";
import Messages from "./screens/controlPanel/Messages";
import Setting from "./screens/controlPanel/Setting";
import { AuthContextProvider } from "./Context/AuthContext";
import Alert from "./components/subComponent/Alert";
import { InfoContextProvider } from "./Context/InfoContext";
import InfoPage from "./screens/controlPanel/Info";

export default function App() {
  // const login = useSelector(selectControlAccess);

  const location = useLocation();

  return (
    <Suspense fallback={null}>
      <AuthContextProvider>
        <InfoContextProvider>
          <AnimatePresence mode='wait'>
          <ScrollToTop />
            <Alert />
          <Routes key={location.pathname} location={location}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/clients" element={<Clients />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/controlpanel" element={<Dashboard />} />
            <Route exact path="/controlpanel/info" element={<InfoPage />} />
            <Route
              exact
              path="/controlpanel/about"
              element={<AboutCompany />}
            />
            <Route
              exact
              path="/controlpanel/services"
              element={<ServicesControl />}
            />
            <Route exact path="/controlpanel/why-us" element={<WhyUs />} />
            <Route
              exact
              path="/controlpanel/clients"
              element={<ClientControl />}
            />
            <Route
              exact
              path="/controlpanel/gallery"
              element={<GalleryControl />}
            />
            <Route exact path="/controlpanel/messages" element={<Messages />} />
            <Route exact path="/controlpanel/setting" element={<Setting />} />
            <Route exact path="*" element={<Error10 />} />
          </Routes>
        </AnimatePresence>
        </InfoContextProvider>
      </AuthContextProvider>
    </Suspense>
  );
}
