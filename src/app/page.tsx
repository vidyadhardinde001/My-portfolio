"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FoodSearch from "@/sections/Food_Search";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    };

    checkAuth(); // Run immediately
    window.addEventListener("storage", checkAuth); // Listen for token changes

    return () => window.removeEventListener("storage", checkAuth); // Cleanup listener
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // ✅ Remove token
    setIsAuthenticated(false); // Update local state
    router.push("/login"); // Redirect to login page
  };

  return (
    <>
      <nav className="flex justify-end p-4">
        {isAuthenticated ? (
          <button onClick={handleLogout} className="text-red-600">
            Logout
          </button>
        ) : (
          <>
            <Link href="/login" className="mr-4 text-blue-600">Login</Link>
            <Link href="/register" className="text-blue-600">Register</Link>
          </>
        )}
      </nav>
      <FoodSearch />
    </>
  );
}
