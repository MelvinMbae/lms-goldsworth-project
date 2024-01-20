import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "./StudentRegForm";

function Registrations() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    image_url: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const id = e.target.id;
    const value = e.target.value;

    setFormData({ ...formData, [id]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((r) => {
        alert(`Welcome ${r.lastname}`);
        navigate("/login", { replace: true })
      })
      .catch((error) => {
        console.error("Error:", error)
        alert("Invalid")
      })
  }

  return (
    <div className="register">
      <SignUpForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default Registrations