import { useState } from "react";

function ParentForm() {

    const [parent, setParent] = useState({
        Firstname: "",
        Lastname: "",
        Email: "",
        Image_url: "",
        Password: "",
        });

    function handleChange(e) {

        const id = e.target.id;
        const value = e.target.value;
    
        setParent({ ...parent, [id]: value })
        }
    
    function handleSubmit(e) {
        e.preventDefault();

    const formData = new FormData(e.target)

    Object.keys(parent).map((key)=>{
        formData.append(key, parent[key])
    })

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
                // console.log(r)
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
        <h1>Parent Registration</h1>
        <div id='parentform' className="form-dialogue">
            <div className="form-item">
                <label htmlFor="firstname"> First Name: </label>
                <input
                    type="text"
                    id="firstname"
                    value={parent.Firstname}
                    autoComplete="off"
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="lastname"> Last Name: </label>
                <input
                    type="text"
                    id="lastname"
                    value={parent.Lastname}
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
                    value={parent.Email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="address"> Passport Photo: </label>
                <input
                    type='file'
                    id="image_url"
                    value={parent.Image_url}
                    onChange={handleChange}
                />
                </div>
            <div className="form-item">
                <label htmlFor="password"> Password: </label>
                <input
                    type="password"
                    id="password"
                    autoComplete="off"
                    value={parent.Password}
                    onChange={handleChange}
                />
            </div>
        </div>
        <button className="btn" type="submit">Register</button>
    </form>
  )
}
export default ParentForm