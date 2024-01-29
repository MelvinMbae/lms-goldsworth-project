import React from "react";
import DownloadButton from "./components/DownloadComp";
import { Link } from "react-router-dom";

function Assignments({ session , assignments }){

    function UtilityMenu(){
        return (
            <div className="assignment-bar">
                <div>
                    <span>
                        <button>Edit</button>
                        <button>Grade Assignment</button>
                        <Link className="button" to={"/new"}>Add Assignment</Link>
                    </span>
                    <button>Save</button>
                </div>
            </div>
        )
    }

    return(
          <div className="assignments">
            {session.user_type === 'teacher' ? <UtilityMenu /> : null}
            <div>{assignments.map((assigno) => (
                <div className="assignment-card" key={assigno.id}>
                    <Link to={`/assignments/${assigno.id}`}><h2>{assigno.assignment_name}</h2></Link>
                    <p>{assigno.content}</p>
                    <div><span className="snippet">{assigno.due_date}</span>
                    <span download><DownloadButton file={assigno.file}/></span></div>
                </div>
            ))}</div>                      
          </div>
    )
}

export default Assignments