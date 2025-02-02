"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    healthIssues: [],
    otherHealthIssues: "",
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      healthIssues: checked
        ? [...prevData.healthIssues, value]
        : prevData.healthIssues.filter((issue) => issue !== value),
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Merge health issues with other health issues
    const allHealthIssues = [
        ...formData.healthIssues,
        ...(formData.otherHealthIssues ? [formData.otherHealthIssues] : [])
    ];

    try {
        const res = await fetch("/api/auth/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                action: "register",
                username: formData.username,
                email: formData.email,
                password: formData.password,
                healthIssues: allHealthIssues
            }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Registration failed");
        
        router.push("/login");
    } catch (err) {
        alert(err.message || "Registration failed");
    }
};


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="w-80 p-6 bg-white rounded-lg shadow-md">
      <input type="text" name="username" placeholder="Full Name" required className="w-full p-2 border rounded mb-2" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required className="w-full p-2 border rounded mb-2" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required className="w-full p-2 border rounded mb-4" onChange={handleChange} />
        
        <label className="block font-semibold mb-2">Health Issues:</label>
        <div className="mb-4">
          <label><input type="checkbox" value="Diabetes" onChange={handleCheckboxChange} /> Diabetes</label><br/>
          <label><input type="checkbox" value="Allergy" onChange={handleCheckboxChange} /> Allergy</label><br/>
          <label><input type="checkbox" value="Heart Disease" onChange={handleCheckboxChange} /> Heart Disease</label><br/>
        </div>

        <textarea name="otherHealthIssues" placeholder="Other health issues (if any)" className="w-full p-2 border rounded mb-4" onChange={handleChange} />

        <button className="w-full p-2 bg-green-600 text-white rounded">Register</button>
      </form>
    </div>
  );
}
