import React from 'react'
import { useParams } from 'react-router-dom'

 function Assignment({ assignments }) {

    const { assignmentID } = useParams()
    const assignment = assignments.filter((assignment)=> assignment.id === parseInt(assignmentID))
    console.log(assignment[0])

  return (
    <div className='assignments'>
        <div className='assignment-container'>
            <h1>{assignment[0].assignment_name}</h1>
            <div>
                <h2>{assignment[0].topic}</h2>
                <p>{assignment[0].content}</p>
            </div>
        </div>
    </div>
  )
}
export default Assignment