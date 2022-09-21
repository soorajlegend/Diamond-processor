import React from "react";
import Form from "../components/Form";
import AnimatedPage from '../animation.js';
import Navigation from '../components/navigation';
import Space from '../components/Space';
import Footer from '../components/Footer';


function Login() {
    return (
        <AnimatedPage>
            <Navigation />
            <Space />
            <div className="flex width-full h-screen justify-center item-center -mt-20 md:mt-20">
     <Form />
        </div>
        <Footer />
        </AnimatedPage>
        
    );
}

export default Login;
