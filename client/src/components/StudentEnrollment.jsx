import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import StudentForm from "./StudentForm";
import ParentForm from "./ParentForm";


function StudentEnrollment() {
  const [ tab, setTab ] = useState(1)

  function onNext(){
    setTab(2)
  }
  function onBack(){
    setTab(1)
  }


  return (
    <div className="register" >
      {tab === 1 ? 
          <StudentForm />
          :
          <ParentForm />}
      { tab === 1 ? <button className="btn" onClick={onNext}><FaArrowRight /></button> : <button className="btn" onClick={onBack}><FaArrowLeft /></button> }
    </div>
  );
}

export default StudentEnrollment