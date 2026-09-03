import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

const Signin = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const handleSignin = (e) => {
        e.preventDefault();

        const storedUser = localStorage.getItem(
            "careerBridgeUser"
        );

        if (!storedUser) {
            setError("No account found. Please signup first.");
            return;
        }

        const user = JSON.parse(storedUser);

        if (
            username === user.username &&
            password === user.password
        ) {

            // Login successful
            localStorage.setItem(
                "careerBridgeLoggedIn",
                "true"
            );

            navigate("/home");

        } else {

            setError("Invalid username or password");

        }
    };

    return (
        <div className="signin-container">

            <div className="signin-card">

                <h1>Welcome Back</h1>

                <p className="signin-subtitle">
                    Sign in to Career Bridge
                </p>

                <form onSubmit={handleSignin}>

                    <div className="input-group">

                        <label>Username</label>

                        <input
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                                setError("");
                            }}
                        />

                    </div>

                    <div className="input-group">

                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setError("");
                            }}
                        />

                    </div>

                    {error && (
                        <p className="signin-error">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="signin-button"
                    >
                        Sign In
                    </button>

                </form>

            </div>

        </div>
    );
};

export default Signin;