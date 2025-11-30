/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModulesControlButtons from "./ModulesControlButtons";
import { useState, useEffect } from "react";
import { FormControl } from "react-bootstrap";
import { useParams } from "next/navigation";
import { setModules, addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import {Module} from "./types";
import * as client from "../../client";
export default function Modules() {
   const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
   const { modules } = useSelector((state: RootState) => state.modulesReducer);
    const dispatch = useDispatch();
     const onUpdateModule = async (module: any) => {
    await client.updateModule(cid, module);
    const newModules = modules.map((m: any) => m._id === module._id ? module : m );
    dispatch(setModules(newModules));
  };
     const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(cid, moduleId);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
  };
     const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    // eslint-disable-next-line @next/next/no-assign-module-variable
    const module = await client.createModuleForCourse(cid as string, newModule); 
    dispatch(setModules([...modules, module]));
  };
    const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

    return (
      <div className="wd-modules">
        
        <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={onCreateModuleForCourse}
      />

      <br />
      <br />
      <br />
      <br />
        <ListGroup className="rounded-0" id="wd-modules">
           {modules
           
          .map((module) => (

    <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
      
      <div className="wd-title p-3 ps-2 bg-secondary">
         <BsGripVertical className="me-2 fs-3" />
         {!(module as Module).editing && module.name}
{(module as Module).editing && (
        <FormControl className="w-50 d-inline-block"
               onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
               onKeyDown={(e) => {
                 if (e.key === "Enter") {
                    onUpdateModule({ ...module, editing: false });
                 }
               }}
               defaultValue={module.name}/>
      )}

         <ModulesControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => onRemoveModule(moduleId)}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              </div>
       {module.lessons && (
      <ListGroup className="wd-lessons rounded-0">
         {module.lessons.map((lesson) => (
        <ListGroupItem key = {lesson._id}  className="wd-lesson p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons/>
          </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}

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