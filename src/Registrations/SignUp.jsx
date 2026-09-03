
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const Signup = () => {
    const navigate = useNavigate();

    const [choice, setChoice] = useState("");
    const [role, setRole] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();

        if (!role) {
            alert("Please select your role");
            return;
        }

        if (!username || !password) {
            alert("Please enter username and password");
            return;
        }

        const user = {
            username,
            password,
            role
        };

        localStorage.setItem(
            "careerBridgeUser",
            JSON.stringify(user)
        );

        navigate("/signin");
    };

    return (
        <div className="signup-container">

            <div className="signup-card">

                <h1>Welcome to Career Bridge</h1>

                <p className="signup-subtitle">
                    Find your next opportunity
                </p>

                {/* STEP 1 - SIGN IN OR SIGN UP */}
                {!choice && (

                    <div className="choice-section">

                        <h2>What would you like to do?</h2>

                        <div className="choice-options">

                            <button
                                className="role-card"
                                onClick={() => setChoice("signup")}
                            >
                                <span className="role-icon">
                                    📝
                                </span>

                                <h3>Sign Up</h3>

                                <p>
                                    Create a new Career Bridge account
                                </p>
                            </button>

                            <button
                                className="role-card"
                                onClick={() => navigate("/signin")}
                            >
                                <span className="role-icon">
                                    🔐
                                </span>

                                <h3>Sign In</h3>

                                <p>
                                    Login to your existing account
                                </p>
                            </button>

                        </div>

                    </div>

                )}

                {/* STEP 2 - ROLE SELECTION */}
                {choice === "signup" && !role && (

                    <div className="role-section">

                        <h2>What are you looking for?</h2>

                        <div className="role-options">

                            <button
                                className="role-card"
                                onClick={() => setRole("candidate")}
                            >
                                <span className="role-icon">
                                    👨‍💻
                                </span>

                                <h3>I'm looking for a job</h3>

                                <p>
                                    Find your next opportunity
                                </p>
                            </button>

                            <button
                                className="role-card"
                                onClick={() => setRole("recruiter")}
                            >
                                <span className="role-icon">
                                    🏢
                                </span>

                                <h3>I'm a Recruiter</h3>

                                <p>
                                    Find talented candidates
                                </p>
                            </button>

                        </div>

                        <button
                            className="back-button"
                            onClick={() => setChoice("")}
                        >
                            ← Back
                        </button>

                    </div>

                )}

                {/* STEP 3 - SIGNUP FORM */}
                {choice === "signup" && role && (

                    <form onSubmit={handleSignup}>

                        <div className="selected-role">

                            <span>
                                {role === "candidate"
                                    ? "👨‍💻 Job Seeker"
                                    : "🏢 Recruiter"}
                            </span>

                            <button
                                type="button"
                                onClick={() => setRole("")}
                            >
                                Change
                            </button>

                        </div>

                        <div className="input-group">

                            <label>Username</label>

                            <input
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) =>
                                    setUsername(e.target.value)
                                }
                            />

                        </div>

                        <div className="input-group">

                            <label>Password</label>

                            <input
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                            />

                        </div>

                        <button
                            type="submit"
                            className="signup-button"
                        >
                            Create Account
                        </button>

                        <button
                            type="button"
                            className="back-button"
                            onClick={() => {
                                setRole("");
                                setChoice("");
                            }}
                        >
                            ← Back
                        </button>

                    </form>

                )}

            </div>

        </div>
    );
};

export default Signup;

