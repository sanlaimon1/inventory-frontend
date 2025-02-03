import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/index.css"; // Ensure this file is correctly imported

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Dummy authentication logic
        if (username === "admin" && password === "password") {
            alert("Login Successful!");
            navigate("/dashboard");
        } else {
            alert("Invalid username or password!");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                <p className="forgot-password">
                    <a href="/forgot-password">Forgot Password?</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
