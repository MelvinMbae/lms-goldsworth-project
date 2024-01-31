import { useState } from 'react'

function CourseForm() {

  const [courseData, setCourseData] = useState({
    course_name: "",
    description: "",
    teacher_id: "",
  });

function handleChange(e) {

const id = e.target.id;
const value = e.target.value;

setCourseData({...courseData, [id]: value })
}

console.log(courseData)

function handleSubmit(){
    fetch("/courses",{
        method:"POST",
        headers:{
            "teacher-Type":"application/json"
        },
        body:JSON.stringify(courseData)
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
    <form id='course-form' className="course-dialogue" onSubmit={handleSubmit}>
    <div className="form-item">
        <label htmlFor="course_name"> Course name: </label>
        <input
            type="text"
            id="course_name"
            value={courseData.course_name}
            autoComplete="off"
            onChange={handleChange}
        />
    </div>
    <div className="form-item">
        <label htmlFor="description"> Description: </label>
        <input
            type="text-area"
            id="description"
            value={courseData.description}
            autoComplete="off"
            onChange={handleChange}
        />
    </div>
    <div className="form-item">
        <label htmlFor="teacher"> Teacher: </label>
        <input
            type="select"
            id="teacher"
            autoComplete="off"
            value={courseData.teacher_id}
            onChange={handleChange}
        />
    </div>
    </form>
  )
}
export default CourseForm