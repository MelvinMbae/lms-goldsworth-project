import { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";


function ContentManagement({ content_name, content_type, course_id, teacher_id, student_id }) {
  const [content, setSavedContent] = useState({
    "content_name":content_name,
    "content_type":content_type,
    "course_id":course_id,
    "student_id":student_id,
    "teacher_id":teacher_id,
  });
  
  
  function handleSubmit(e) {
    e.preventDefault();
    
    console.log(e)


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