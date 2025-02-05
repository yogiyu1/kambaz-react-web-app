import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
export default function Modules() {
  const [collapsed] = useState(false);
  return (
    <div>
      <div>
      <ModulesControls /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
          <span className="me-2 fs-3">
              <BsGripVertical />
            </span> Week 1 <LessonControlButtons />
          </div>
          {!collapsed && (
            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <span className="me-2 fs-3">
                  <BsGripVertical />
                </span> LEARNING OBJECTIVES <LessonControlButtons />
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <span className="me-2 fs-3">
                  <BsGripVertical />
                </span> Introduction to the course <LessonControlButtons />
              </ListGroup.Item>
            </ListGroup>)}
        </ListGroup.Item>
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
          <span className="me-2 fs-3">
                  <BsGripVertical />
                </span> Week 2 <LessonControlButtons />
          </div>
          {!collapsed && (
            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <span className="me-2 fs-3">
                  <BsGripVertical />
                </span> Content for Week 2 <LessonControlButtons />
              </ListGroup.Item>
            </ListGroup>)}
        </ListGroup.Item>
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
          <span className="me-2 fs-3">
                  <BsGripVertical />
                </span> Week 3 <LessonControlButtons />
          </div>
          {!collapsed && (
            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <span className="me-2 fs-3">
                  <BsGripVertical />
                </span> Content for Week 3 <LessonControlButtons />
              </ListGroup.Item>
            </ListGroup>)}
        </ListGroup.Item>
      </ListGroup>
    </div>
  </div>
  );}