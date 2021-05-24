import React from "react";
import {Link} from "react-router-dom";

export const Login = () =>{
    return(
        <main>
            <div className="wrapper">
                <div className="container-login">
                    <Link to={"/sign-in"}>Sign-in</Link>
                    <Link to={"/sign-up"}>Sign-up</Link>
                </div>
            </div>
        </main>
    )
}

export default Login;