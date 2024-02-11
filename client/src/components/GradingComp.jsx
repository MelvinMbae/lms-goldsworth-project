import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { appContext } from '../utils/appContext';

function GradingComp({ assignment }) {
    const { user } = useContext(appContext)

    const [gradingReport, SetGradingReport] = useState({
        topic:assignment.assignment_name,
        grade:"",
        teacher_remarks:"",
        is_graded:!assignment.is_graded,
        course_id:assignment.course_id,
        student_id:assignment.student_id,
        teacher_id:user.teacher_id,
    });
    
    
    // console.log(assignment)
    function handleChange(e){
        const id = e.target.id
        const value = e.target.value

        SetGradingReport({...gradingReport, [id]:value})
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(gradingReport)

        fetch('/report-cards',{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(gradingReport),
          })
            .then((r) => {
                if (r.ok){
                    r.json().then((r) => {
                    console.log(r)
                    toast.success('Assignment graded')
                    })
                    }
                else{
                    throw new Error('error')
                }
            })
            .catch((error)=> toast.error(`${error} assignment not graded`))
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                id='grade'
                type="text"
                value={gradingReport.grade}
                onChange={(e)=>handleChange(e)}
            />
            <input
                id='teacher_remarks'
                type="text"
                value={gradingReport.teacher_remarks}
                onChange={(e)=>handleChange(e)}
            />
          <button className='button'>Grade</button>
        </form>
    </div>
  )
}

export default GradingComp
