import DownloadButton from "./components/DownloadComp";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import AssignmentModule from "./AssignmentModule";
import { appContext } from "./utils/appContext";

function Assignments({ assignmentList , setAssignmentList }){

    const { session , assignments , submitted } = useContext(appContext)


    function UtilityMenu(){
        return (
            <div className="assignment-bar">
                <Link onClick={()=>toast.warn('Please select an Assignment first!')}>Grade Assignment</Link>
                <Link to={"/new"}>Add Assignment</Link>
            </div>
        )
    }

    return(
        <div className="assignments">
            <div>
                <button id="assignments" onClick={()=>setAssignmentList(assignments)}>View Assignments</button>
                <button id="submitted" onClick={()=>setAssignmentList(submitted)}>View Submitted</button>
            </div>
            <div>
            {session.user_type === 'teacher' ? <UtilityMenu /> : null}
            <AssignmentModule assignments={assignmentList}/>
            </div>      
          </div>
    )
}

export default Assignments