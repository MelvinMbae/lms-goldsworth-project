import { useState } from 'react'

function Reference() {

  const [content, setContent] = useState({
    doc_name: "",
    description: "",
    doc_type: "",
  });

function handleChange(e) {

const id = e.target.id;
const value = e.target.value;

setContent({ ...content, [id]: value })
}

function handleSubmit(){
    fetch("/courses",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(content)
    })
    .then((r)=>{
        if(r.ok){
            r.json().then((data)=>{
                console.log(data)
            })
        }
        else{
            throw new Error(error)
        }
    })
    .catch((error)=>console.error(error))
}
  return (
    <form id='course-form' className="course-dialogue" onSubmit={handleSubmit}>
        <div className="form-item">
            <label htmlFor="doc_name"> Course name: </label>
            <input
                type="text"
                id="doc_name"
                value={content.doc_name}
                autoComplete="off"
                onChange={handleChange}
            />
        </div>
        <div className="form-item">
            <label htmlFor="description"> Description: </label>
            <input
                type="text-area"
                id="description"
                value={content.description}
                autoComplete="off"
                onChange={handleChange}
            />
        </div>
        <div className="form-item">
            <label htmlFor="doc_type"> Document Type: </label>
            <input
                type="select"
                id="doc_type"
                autoComplete="off"
                value={content.doc_type}
                onChange={handleChange}
            />
        </div>
    </form>
  )
}
export default Reference