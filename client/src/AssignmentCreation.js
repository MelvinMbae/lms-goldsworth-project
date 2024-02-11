import { useState } from 'react'
import './AssignmentCreation.css';

function AssignmentForm() {


    const [assignment, setAssignment] = useState({
        assignment_name: "",
        topic: "",
        content: "",
        assignment_file:"",
        due_date: "",
        course_id: "",
      });

    function handleChange(e) {

    const id = e.target.id;
    const value = e.target.value;

    setAssignment({ ...assignment, [id]: value })
    }

    function handleSubmit(e){
        e.preventDefault()

        const formData = new FormData(e.target)

        Object.keys(assignment).map((key)=>{
        formData.append(key, assignment[key])
        })

        fetch("/assignments",{
            method:"POST",
            body:formData,
        })
        .then((r)=>{
            if(r.ok){
                r.json().then((data)=>{
                    console.log(data)
                })
            }
            else{
                throw new Error('error')
            }
        })
        .catch((error)=>console.error(error))
    }

  return (
    <form id='assignmentform' className="form-dialogue" onSubmit={(e)=>handleSubmit(e)}  encType="multipart/form-data">
        <div className="form-item">
            <label htmlFor="assignment_name"> Assignment name: </label>
            <input
                type="text"
                id="assignment_name"
                value={assignment.assignment_name}
                autoComplete="on"
                onChange={handleChange}
            />
        </div>
        <div className="form-item">
            <label htmlFor="topic"> Topic: </label>
            <input
                type="text"
                id="topic"
                value={assignment.topic}
                autoComplete="on"
                onChange={handleChange}
            />
        </div>
        <div className="form-item">
            <label htmlFor="content"> Content: </label>
            <input
                type="content"
                id="content"
                autoComplete="on"
                value={assignment.content}
                onChange={handleChange}
            />
        </div>
        <div className="form-item">
            <label htmlFor="assignment_file"> Assignment_file: </label>
            <input
                type="file"
                id='assignment_file'
                name="assignment_file"
                autoComplete="on"
                // value={assignment.content}
                onChange={handleChange}
            />
        </div>
        <div className="form-item">
            <label htmlFor="address"> Due date: </label>
            <input
                type='date'
                id="due_date"
                value={assignment.due_date}
                onChange={handleChange}
            />
            </div>
        <div className="form-item">
            <label htmlFor="course_id"> Course_id: </label>
            <input
                type="select"
                id="course_id"
                autoComplete="on"
                value={assignment.course_id}
                onChange={handleChange}
            />
        </div>
        <button className="btn" type="submit">Add</button>
    </form>
  )
}

export default AssignmentForm