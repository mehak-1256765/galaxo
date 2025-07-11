import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi"; // import eye icons

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // state for toggle
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get registered user from localStorage (simulate backend)
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!registeredUser) {
      setError("No registered user found. Please register first.");
      return;
    }

    if (email === registeredUser.email && password === registeredUser.password) {
      // Save logged in user session
      localStorage.setItem("loggedInUser", JSON.stringify(registeredUser));
      setError("");
      // Redirect to home page or wherever you want after login
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#030014] to-[#090325]">
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Login to GALAXO</h2>

        {error && (
          <p className="text-red-500 mb-4 text-center font-semibold">{error}</p>
        )}

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"} // toggle input type
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-3 right-3 text-white opacity-70 hover:opacity-100"
              tabIndex={-1} // skip tab focus on button
            >
              {showPassword ? <HiEyeOff size={22} /> : <HiEye size={22} />}
            </button>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 py-3 rounded-lg font-semibold text-white shadow-md hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-sm text-center text-white">
          <Link to="/forgot-password" className="text-cyan-300 hover:underline">
            Forgot Password?
          </Link>
        </div>

        <div className="mt-2 text-sm text-center text-white">
          Don't have an account?{" "}
          <Link to="/register" className="text-cyan-300 hover:underline">
            Register now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
