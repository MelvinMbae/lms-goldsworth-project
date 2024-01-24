import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import StudentForm from "./StudentForm";
import ParentForm from "./ParentForm";

function Registrations() {
  const [student, setStudent] = useState({
    firstname: "",
    lastname: "",
    email: "",
    image_url: "",
    password: "",
    parent_id:""
  });
  const [parent, setParent] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Image_url: "",
    Password: "",
  });
  

  function handleParentChange(e) {
   
    const id = e.target.id;
    const value = e.target.value;

    setParent({ ...parent, [id]: value })
  }
  function handleStudentChange(e) {
   
    const id = e.target.id;
    const value = e.target.value;

    setStudent({ ...student, [id]: value }) 
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/parents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parent),
    })
      .then((r) => { 
        if(r.ok){
          r.json().then((r) => {
            console.log(r)
            
            setStudent((prevstudent)=>{
              return {...prevstudent , parent_id : r.id}
            })
            console.log(student)
            // return     fetch("/students", {
            //   method: "POST",
            //   headers: {
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify(parent),
            // })
          })
        }
        else {
          throw new Error(`HTTP error ${r.status}`)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <form className="register" onSubmit={handleSubmit}>
    <h1>Student Enrollment</h1>
      <div className="forms">
        <div>
          <h2>Student Information</h2>
          <StudentForm student={student} handleChange={handleStudentChange} /></div>
        <div>
          <h2>Parent Information</h2>
          <ParentForm parent={parent} handleChange={handleParentChange} /></div>
      </div>
      <button className="btn" type="submit">
        Register
      </button>
    </form>
  );
}

export default Registrations