import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    // Get the showAlert function from alertContext

    // State to hold email and password credentials
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    // Store the API endpoint in the host constant
    const host = process.env.REACT_APP_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Make a POST request to the login endpoint with email and password
        const response = await fetch(`${host}api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });

        const json = await response.json();
        if (json.success) {
            // If login is successful, save authToken to local storage and redirect to home page
            localStorage.setItem('token', json.authToken);
            navigate('/');
            // Show success alert
            alert("Welcome back! Successfully Loggedin :)")
        }
        else {
            // If login is unsuccessful, show warning alert
            alert("Inavalid Credentials! Please Login Using Correct Credentials.");
        }
    }

    return (
        <div>
    
                        <h2 className="mb-4" style={{ color: "darkred", fontWeight: "Bold" }}>Log in</h2>
                        <form onSubmit={handleSubmit}>

                            {/* Email input field */}
                            <div className="form-outline mb-4 material-textfield" >
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control form-control-lg"
                                    placeholder=" "
                                    onChange={onChange}
                                    required
                                />
                                <label className="form-label" htmlFor="email">
                                    Email address
                                </label>
                            </div>

                            {/* Password input field */}
                            <div className="form-outline mb-3 material-textfield">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    className="form-control form-control-lg"
                                    placeholder=" "
                                    onChange={onChange}
                                    required
                                    minLength={5}
                                />
                                <label className="form-label" htmlFor="password">
                                    Password
                                </label>

                                {/* Password toggle icon */}
                                <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                    {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                                </span>
                            </div>

                            {/* Login button */}
                            <div className="text-center mt-4 pt-2 ">
                                <button
                                    type="Submit"
                                    className="btn btn-primary btn-lg mb-3"
                                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}

                                >
                                    Login
                                </button>

                                {/* Signup link */}
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Don&apos;t have an account?{" "}
                                    <Link to="/signup" className="link-danger">
                                        Register
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                
    )
}
export default Login