import React from "react";
import DownloadButton from "./components/DownloadComp";
import { Link } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";

function Assignments({ session , assignments }){
    

    function UtilityMenu(){
        return (
            <div className="assignment-bar">
                <Link to={`/assignments`}>Edit Assignment</Link>
                <Link to={"/grading"}>Grade Assignment</Link>
                <Link to={"/new"}>Add Assignment</Link>
            </div>
        )
    }

    return(
          <div className="assignments">
            <div>
            {assignments.map((assigno) => (
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
            {session.user_type === 'teacher' ? <UtilityMenu /> : null}
          </div>
    )
}

export default Assignments