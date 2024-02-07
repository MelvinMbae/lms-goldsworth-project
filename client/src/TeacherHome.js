import { Fragment, useContext } from "react";
import { appContext } from "./utils/appContext";


function TeacherHome({ children }) {

  const {  session  } = useContext(appContext)

  // console.log(children)
  return (
   <Fragment>{session.user_type === 'teacher' ? { children } : <div>You have no access to this route</div> }</Fragment>
  );
}

export default TeacherHome;


