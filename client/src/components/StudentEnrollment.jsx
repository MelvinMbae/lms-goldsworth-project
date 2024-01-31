import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import StudentForm from "./StudentForm";
import ParentForm from "./ParentForm";
// import { json } from "react-router-dom";

function StudentEnrollment() {
  const [student, setStudent] = useState({
    firstname: "",
    lastname: "",
    email: "",
    personal_email: "",
    image_url: "",
    password: "",
    parent_id:"",
  });

        
  const [parent, setParent] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Image_url: "",
    Password: "",
  });
  
  const [ tab, setTab ] = useState(1)

  function onNext(){
    setTab(2)
  }
  function onBack(){
    setTab(1)
  }

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

    const formData = new FormData(e.target)

    Object.keys(student).map((key)=>{
      formData.append(key, student[key])
    })

    fetch("/parents", {
      method: "POST",
      body: JSON.stringify(parent),
    })
      .then((r) => { 
        if(r.ok){
          r.json().then((r) => {
            console.log(r)
            setStudent({...student , parent_id : r.id})
            
            return     fetch("/students", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: formData,
            })
          })
          .then((r) => { 

            if(r.ok){
              r.json().then((r) => {
                console.log(r)
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
        else {
          throw new Error(`HTTP error ${r.status}`)
        }
          })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className="register" >
      <h1>Student Enrollment</h1>
      <form  id="student-form" className="forms" onSubmit={handleSubmit} encType="multipart/form-data">

          <div><h2>Student Form</h2><StudentForm  student={student} handleChange={handleStudentChange} /></div>
          {tab === 1 ? 
          <div><h2>Parent Form</h2><ParentForm  parent={parent} student={student} handleChange={handleParentChange} /></div> : <button className="btn" type="submit">Register</button> }
          
      </form>
      { tab === 1 ? <button className="btn" onClick={onNext}><FaArrowRight /></button> : <button className="btn" onClick={onBack}><FaArrowLeft /></button> }

    </div>
  );
}

export default StudentEnrollment