import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import StudentForm from "./StudentForm";
import ParentForm from "./ParentForm";

function ContentManagement() {
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
  console.log(student)

  return (
    <div className="register" >

    </div>
  );
}

export default ContentManagement