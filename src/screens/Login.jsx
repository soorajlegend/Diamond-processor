import React from "react";
import Form from "../components/Form";
import AnimatedPage from '../animation.js';

function Login() {
    return (
        <AnimatedPage>
            <div className="flex width-full h-screen justify-center item-center -mt-20 md:mt-20">
     <Form />
        </div>
        </AnimatedPage>
        
    );
}

export default Login;
