import { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

//   const notify = () => toast("Form submitted !");


function handleChange(e) {

const id = e.target.id;
const value = e.target.value;

setCourseData({...courseData, [id]: value })
}

console.log(courseData)

function handleSubmit(e){
    e.preventDefault();

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
                console.log(data);
                toast.success('Form submitted successfully !')
            })
        }
        else{
            throw new Error('error')
        }
    })
    .catch((error)=> toast.error('Form not submitted !')
    )
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
            <label htmlFor="description" id='description'> Description: </label>
            <input
                type="text"
                id="description"
                value={courseData.description}
                autoComplete="off"
                onChange={handleChange}
            />
        </div>
        <div className="form-item">
            <label htmlFor="image_url"> Course Image: </label>
            <input
                type="file"
                id="image_url"
                autoComplete="off"
                // value={courseData.teacher_id}
                onChange={handleChange}
            />
        </div>
        <div className="form-item">
            <label htmlFor="daysOfWeek"> Learning Days: </label>
                <select name="daysOfWeek" multiple>
                    <option value={courseData.daysOfWeek} >Monday</option>
                    <option value={courseData.daysOfWeek} >Tuesday</option>
                    <option value={courseData.daysOfWeek} >Wednesday</option>
                    <option value={courseData.daysOfWeek} >Thursday</option>
                    <option value={courseData.daysOfWeek} >Friday</option>
                </select>
        </div>
        <div className="dates">
            <label htmlFor="startRecur"> Course Start Date: </label>
            <input
                type="date"
                id="startRecur"
                autoComplete="off"
                value={courseData.startRecur}
                onChange={handleChange}
            />
            <label htmlFor="endRecur"> Course End Date: </label>
            <input
                type="dates"
                id="endRecur"
                value={courseData.endRecur}
                autoComplete="off"
                onChange={handleChange}
            />

        </div>
        <div className="times">
            <label htmlFor="startTime"> Course Start Time: </label>
            <input
                type="time"
                id="startTime"
                autoComplete="off"
                value={courseData.startTime}
                onChange={handleChange}
            />
            <label htmlFor="endTime"> Course End Time: </label>
            <input
                type="time"
                id="endTime"
                autoComplete="off"
                value={courseData.endTime}
                onChange={handleChange}
            />
        </div>
        <div><button className="course-form-btn" type="submit">Add Course</button></div>
        
    </form>
  )
}
export default CourseForm