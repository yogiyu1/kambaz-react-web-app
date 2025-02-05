import CourseNavigation from "./Navigation";
import Home from "./Home";
import Modules from "./Modules";
import { Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import Assignments from "./Assignments";
import PeopleTable from "./People/Table";



export default function Courses() {
  return (
    <div className="container-fluid mt-3">
      <h2 className="text-black d-flex align-items-center">
        CS1234
      </h2>
      <hr />

      <div className="d-flex gap-3">
        <div className="d-none d-md-block" style={{ width: "250px" }}>
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments/*" element={<Assignments />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
