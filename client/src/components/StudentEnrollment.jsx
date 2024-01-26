import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import StudentForm from "./StudentForm";
import ParentForm from "./ParentForm";

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
            
            setStudent({...student , parent_id : r.id})
            
            return     fetch("/students", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(student),
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
      <form  className="forms" onSubmit={handleSubmit} encType="multipart/formdata">
        {tab === 1 ? 
          <div><h2>Student Form</h2><StudentForm  student={student} handleChange={handleStudentChange} /></div> :
          <div><h2>Parent Form</h2><ParentForm  parent={parent} student={student} handleChange={handleParentChange} /><button className="btn" type="submit">Register</button></div> }
      </form>
      {tab === 1 ? <button className="btn" onClick={onNext}><FaArrowRight /></button> : <button className="btn" onClick={onBack}><FaArrowLeft /></button>}
    </div>
  );
}

export default StudentEnrollment