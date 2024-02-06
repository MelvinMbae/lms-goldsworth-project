import { useState } from "react";


function StudentForm() {
    const [student, setStudent] = useState({
        firstname: "",
        lastname: "",
        email: "",
        personal_email: "",
        image_url: "",
        password: "",
        parent_id:"",
      });

    function handleChange(e) {

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

        fetch("/students", {
            method: "POST",
            body: formData,
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

  return (
    <form  id="student-form" className="forms" onSubmit={handleSubmit} encType="multipart/form-data">
        <h1>Student Enrollment</h1>
        <div id='studentform'  className="form-dialogue">
            <div className="form-item">
                <label htmlFor="firstname"> First Name: </label>
                <input
                    type="text"
                    id="firstname"
                    value={student.firstname}
                    autoComplete="off"
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="lastname"> Last Name: </label>
                <input
                    type="text"
                    id="lastname"
                    value={student.lastname}
                    autoComplete="off"
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="email"> Email: </label>
                <input
                    type="email"
                    id="email"
                    autoComplete="off"
                    value={student.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
            <label htmlFor="personal_email"> Personal_email: </label>
            <input
                type="personal_email"
                id="personal_email"
                autoComplete="off"
                value={student.personal_email}
                onChange={handleChange}
            />
            </div>
            <div className="form-item">
                <label htmlFor="image_url"> Passport Photo: </label>
                <input
                    type='file'
                    id="image_url"
                    name="image_url"
                    // value={student.image_url}
                    onChange={handleChange}
                />
                </div>
            <div className="form-item">
                <label htmlFor="password"> Password: </label>
                <input
                    type="password"
                    id="password"
                    autoComplete="off"
                    value={student.password}
                    onChange={handleChange}
                />
            </div>
        </div>
        <button className="btn" type="submit">Register</button>
    </form>
  )
}

export default StudentForm