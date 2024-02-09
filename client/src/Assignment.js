import React from 'react'
import { useParams } from 'react-router-dom'
import GradingComp from './components/GradingComp'
import DownloadPDF from './components/DownloadPDF'

 function Assignment({ assignments }) {

    const { assignmentID } = useParams()
    const assignment = assignments.filter((assignment)=> assignment.id === parseInt(assignmentID))[0]
    // console.log(assignments)
    let downloadLink

    function downloadAssignment(){

      fetch(`/assignments/${assignmentID}`)
      .then((r)=>r.json())
      .then((r)=>{
        downloadLink = r.assignment_file
      }
      )
    }

  return (
    <div className='assignments'>
        <div className='assignment-container'>
            <DownloadPDF />
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