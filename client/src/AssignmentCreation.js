import { useState } from 'react'

function AssignmentForm() {


    const [assignment, setAssignment] = useState({
        assignment_name: "",
        topic: "",
        content: "",
        due_date: "",
        course_id: "",
      });

    function handleChange(e) {

    const id = e.target.id;
    const value = e.target.value;

    setAssignment({ ...assignment, [id]: value })
    }

    function handleSubmit(){
        fetch("/assignments",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(assignment)
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
    <form id='assignmentform' className="form-dialogue" onSubmit={handleSubmit}>
        <div className="form-item">
            <label htmlFor="assignment_name"> Assignment name: </label>
            <input
                type="text"
                id="assignment_name"
                value={assignment.assignment_name}
                autoComplete="off"
                onChange={handleChange}
            />
        </div>
        <div className="form-item">
            <label htmlFor="topic"> Topic: </label>
            <input
                type="text"
                id="topic"
                value={assignment.topic}
                autoComplete="off"
                onChange={handleChange}
            />
        </div>
        <div className="form-item">
            <label htmlFor="content"> Content: </label>
            <input
                type="content"
                id="content"
                autoComplete="off"
                value={assignment.content}
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
                autoComplete="off"
                value={assignment.course_id}
                onChange={handleChange}
            />
        </div>
    </form>
  )
}

export default AssignmentForm