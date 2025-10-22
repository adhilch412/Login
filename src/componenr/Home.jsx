import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("You have logged out!");
    navigate("/Login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4"> Home Page</h1>
        <p className="text-gray-700 mb-6">
          Welcome to your dashboard! You are now logged in.
        </p>
        <button
          onClick={handleLogout}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
