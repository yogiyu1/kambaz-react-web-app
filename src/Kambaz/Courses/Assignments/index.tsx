import { Route, Routes } from "react-router-dom";
import AssignmentEditor from "./Editor";


import AssignmentsList from "./List"; 


export default function Assignments() {
  return (
    <div className="d-flex">
  
      <div className="d-none d-md-block" style={{ width: "250px" }}>
      
      </div>
      <div className="flex-grow-1 p-3">
        <Routes>
          <Route path="/" element={<AssignmentsList />} />
          <Route path="A1" element={<AssignmentEditor />} />
        </Routes>
      </div>
    </div>
  );
}
 