import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState(""); // added name field
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [profilePic, setProfilePic] = useState(null); // base64 image
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const newUser = { name, email, password, profilePic };
    localStorage.setItem("registeredUser", JSON.stringify(newUser));

    setError("");
    alert("Registration successful! Please login.");

    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#030014] to-[#090325]">
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Register for GALAXO
        </h2>

        {error && (
          <p className="text-red-500 mb-4 text-center font-semibold">{error}</p>
        )}

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <label className="text-white text-sm">Upload Profile Picture (optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="text-white"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 py-3 rounded-lg font-semibold text-white shadow-md hover:opacity-90 transition"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-sm text-center text-white">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-300 hover:underline">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
