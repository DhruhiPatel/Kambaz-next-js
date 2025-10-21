"use client"
import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModulesControlButtons from "./ModulesControlButtons";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
export default function Modules() {
   const { cid } = useParams();
  const modules = db.modules;
    return (
      <div>
        
        <ModulesControls /><br /><br /><br /><br />
        <ListGroup className="rounded-0" id="wd-modules">
           {modules
          .filter((module) => module.course === cid)
          .map((module) => (

    <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
      
      <div className="wd-title p-3 ps-2 bg-secondary">
         <BsGripVertical className="me-2 fs-3" /> {module.name}
         <ModulesControlButtons/>
      </div>
       {module.lessons && (
      <ListGroup className="wd-lessons rounded-0">
         {module.lessons.map((lesson) => (
        <ListGroupItem key = {lesson._id}  className="wd-lesson p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons/>
          </ListGroupItem>
           ))}</ListGroup>)}
           </ListGroupItem>
          ))}
          </ListGroup>
           </div>
    );}

           {/*}
        <ListGroupItem className="wd-lesson p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons/>
          </ListGroupItem> 
        <ListGroupItem className="wd-lesson p-3 ps-1">
         <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development <LessonControlButtons/>
         </ListGroupItem>
         <ListGroupItem className="wd-lesson p-3 ps-1">
         <BsGripVertical className="me-2 fs-3" /> Lesson 1 <LessonControlButtons/>
         </ListGroupItem>
         <ListGroupItem className="wd-lesson p-3 ps-1">
         <BsGripVertical className="me-2 fs-3" /> Lesson 2 <LessonControlButtons/>
         </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
         <BsGripVertical className="me-2 fs-3" />
         <ModulesControlButtons/>
          Week 2 
         
      </div>
      <ListGroup className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons/>
          </ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1">
         <BsGripVertical className="me-2 fs-3" /> LESSON 1 <LessonControlButtons/>
          </ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1">
         <BsGripVertical className="me-2 fs-3" /> LESSON 2 <LessonControlButtons/>
          </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
  </ListGroup>

       </div>
  );}
  */}