import { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";


function ContentManagement({ assignment }) {
  const [content, setSavedContent] = useState({
    // "content_name":assignment.content_name,
    // "content_type":assignment.content_type,
    // "course_id":assignment.course_id,
    // "student_id":assignment.student_id,
    // "teacher_id":assignment.teacher_id,
  });
  
  
  function handleSubmit(e) {
    e.preventDefault();

    fetch("/save_contents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    })
      .then((r) => { 
        if(r.ok){
          r.json().then((r) => console.log(r))
        }        
        else {
          throw new Error(`HTTP error ${r.status}`)
          }
        })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <button className="save-btn" onClick={handleSubmit}>
      <FaRegBookmark style={{color:"004B5B",width:"30px", height:"25px", cursor:"pointer"}}/>
    </button>
  );
}

export default ContentManagement