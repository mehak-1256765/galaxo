import React, { useEffect, useState } from "react";
import { Home, Rocket, Trophy, User } from "lucide-react";

const Dashboard = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    profilePic: "https://i.pravatar.cc/150?img=12", // default placeholder
  });

  useEffect(() => {
    // Read from registeredUser (or loggedInUser if you want)
    const storedUser =
      localStorage.getItem("loggedInUser") ||
      localStorage.getItem("registeredUser");

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser({
          name: parsedUser.name || "",
          email: parsedUser.email || "",
          profilePic:
            parsedUser.profilePic || "https://i.pravatar.cc/150?img=12",
        });
      } catch {
        // Keep default if parsing fails
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-black to-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-gray-800 to-gray-900 p-6 hidden md:block">
        <h2 className="text-2xl font-bold text-indigo-400 mb-10">
          Galaxy Dashboard
        </h2>
        <nav className="space-y-6 text-indigo-300 font-medium">
          <a href="#" className="flex items-center gap-3 hover:text-white transition">
            <Home size={20} /> Home
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-white transition">
            <Rocket size={20} /> Missions
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-white transition">
            <Trophy size={20} /> Achievements
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-white transition">
            <User size={20} /> Profile
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 pt-24 md:pt-16 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-indigo-300">MY PROFILE</h1>

        <section className="max-w-md bg-gray-800 p-6 rounded-lg shadow-lg flex items-center gap-6">
          {/* Profile picture */}
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-indigo-400"
          />

          {/* Name & Email */}
          <div>
            <h2 className="text-2xl font-semibold">{user.name || "Your Name"}</h2>
            <p className="text-indigo-400 mt-1">
              {user.email ? maskEmail(user.email) : "your.email@example.com"}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

// Helper function to mask email (like meh...@example.com)
function maskEmail(email) {
  const [name, domain] = email.split("@");
  if (name.length <= 3) return `***@${domain}`;
  return `${name.slice(0, 3)}...@${domain}`;
}

export default Dashboard;
