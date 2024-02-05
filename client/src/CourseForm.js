import { useState } from 'react'

function CourseForm() {

  const [courseData, setCourseData] = useState({
    course_name: "",
    description: "",
    image_url: "",
    daysOfWeek: "",
    startRecur: "",
    endRecur: "",
    startTime: "",
    endTime: "",
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
    <form id='course-form' className="contents course-dialogue" onSubmit={handleSubmit}>
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
        <label htmlFor="teacher"> Course Image: </label>
        <input
            type="select"
            id="teacher"
            autoComplete="off"
            value={courseData.teacher_id}
            onChange={handleChange}
        />
    </div>
    <div className="form-item">
        <label htmlFor="description"> Learning Days: </label>
            <select name="days" form="carform" multiple>
                <option value={1} >Monday</option>
                <option value={2} >Tuesday</option>
                <option value={3} >Wednesday</option>
                <option value={4} >Thursday</option>
                <option value={5} >Friday</option>
            </select>
        <input
            type="select"
            id="description"
            value={courseData.description}
            autoComplete="off"
            onChange={handleChange}
        />
    </div>
    <div className="form-item">
        <label htmlFor="teacher"> Course Start Date: </label>
        <input
            type="date"
            id="teacher"
            autoComplete="off"
            value={courseData.teacher_id}
            onChange={handleChange}
        />
    </div>
    <div className="form-item">
        <label htmlFor="description"> Course End Date: </label>
        <input
            type="date"
            id="description"
            value={courseData.description}
            autoComplete="off"
            onChange={handleChange}
        />
    </div>
    <div className="form-item">
        <label htmlFor="teacher"> Course Start Time: </label>
        <input
            type="time"
            id="teacher"
            autoComplete="off"
            value={courseData.teacher_id}
            onChange={handleChange}
        />
    </div>
    <div className="form-item">
        <label htmlFor="teacher"> Course End Time: </label>
        <input
            type="time"
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