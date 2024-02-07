import { useState } from "react"

import {Link} from 'react-router-dom'
import { FaRegBookmark } from "react-icons/fa"
import DownloadButton from './components/DownloadComp.jsx'

function SavedDocs({ savedDocs , setDocs }) {

    const [ toSave, setData ] = useState({})

    console.log(savedDocs)

  return (
    <div className="assignments">
        <div>
        {savedDocs.map((assigno) => (
            <div className="assignment-card" key={assigno.id}>
                <Link to={`/assignments/${assigno.id}`}><h2>{assigno.assignment_name}</h2></Link>
                <p>{assigno.content}</p>
                <div className="download-btns">
                    <button className="save-btn">
                        <FaRegBookmark style={{color:"004B5B",width:"30px", height:"25px", cursor:"pointer"}}/>
                    </button>
                    <DownloadButton file={assigno.file}/>
                </div>
            </div>
            
        ))} 
        </div> 
    </div>
  )
}

export default SavedDocs