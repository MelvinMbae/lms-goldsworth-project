import React from 'react'
import { useParams } from 'react-router-dom'
import GradingComp from './components/GradingComp'

 function Assignment({ assignments }) {

    const { assignmentID } = useParams()
    const assignment = assignments.filter((assignment)=> assignment.id === parseInt(assignmentID))[0]
    // console.log(assignments)

  return (
    <div className='assignments'>
        <div className='assignment-container'>
            <h1>{assignment.assignment_name}</h1>
            <div>
                <h2>{assignment.topic}</h2>
                <p>{assignment.content}</p>
            </div>
            { Object.keys(assignment).includes('grade') ? <GradingComp assignment={assignment}>Grade</GradingComp> : <button> Submit </button>}
        </div>
    </div>
  )
}
export default Assignment