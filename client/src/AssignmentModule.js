import DownloadButton from "./components/DownloadComp";
import { Link } from "react-router-dom";

function AssignmentModule({ assignments }){

    return(
        <div>
            {assignments.map((assigno) => (
                <div className="assignment-card" key={assigno.id} id={assigno.id}>
                    <Link to={`/assignments/${assigno.id}`}><h2>{assigno.assignment_name}</h2></Link>
                    <p>{assigno.content}</p>
                    <div className="download-btns">
                        <DownloadButton file={assigno.file}/>
                    </div>
                </div>  
            ))}
        </div>      
    )
}

export default AssignmentModule