import DownloadButton from "./components/DownloadComp";
import { Link } from "react-router-dom";
import ContentManagement from "./components/ContentManagement";

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
    // console.log(session)

    let student_id = session.user_type === 'student' ? session.user_details.student_id : null
    let teacher_id = session.user_type === 'teacher' ? session.user_details.teacher_id : null


    return(
          <div className="assignments">
            <div>
            {assignments.map((assigno) => (
                <div className="assignment-card" key={assigno.id} id={assigno.id}>
                    <Link to={`/assignments/${assigno.id}`}><h2>{assigno.assignment_name}</h2></Link>
                    <p>{assigno.content}</p>
                    <div className="download-btns">
                        <ContentManagement content_name={assigno.assignment_name} content_type={'DOC'} course_id={assigno.course_id} student_id = {student_id} teacher_id = {teacher_id}/>
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