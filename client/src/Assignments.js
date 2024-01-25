import React from "react";
import DownloadButton from "./components/DownloadComp";

function Assignments({ assignments }){

    return(
          <div className="assignments">  
              {assignments.map((assigno) => (
                  <div className="assignment-card" key={assigno.id}>
                      <h1>{assigno.assignment_name}</h1>
                      <p>{assigno.content}</p>
                      <div><span className="snippet">{assigno.due_date}</span>
                      <span download><DownloadButton file={assigno.file}/></span></div>
                  </div>
              ))}                      
          </div>
    )
}

export default Assignments