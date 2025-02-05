import { Link } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import { BsGripVertical, BsThreeDotsVertical, BsSearch } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";

export default function AssignmentsList() {
  return (
    <div className="container mt-2" style={{ maxWidth: "900px" }}> 
      

      <div className="d-flex justify-content-between align-items-center mb-3">
        <InputGroup style={{ width: "300px" }}> 
          <InputGroup.Text>
            <BsSearch />
          </InputGroup.Text>
          <Form.Control placeholder="Search for Assignments" />
        </InputGroup>

        <div className="d-flex gap-2 justify-content-end">
          <Button variant="light" className="border">
            <span className="me-1 text-dark">
              <FaPlus />
            </span>
            Group
          </Button>
          <Button variant="danger">
            <span className="me-1 text-white">
              <FaPlus />
            </span>
            Assignment
          </Button>
        </div>
      </div>

      <Form 
        className="bg-secondary text-dark p-2 d-flex justify-content-between align-items-center rounded" 
        style={{ width: "100%", maxWidth: "900px" }} 
      >
        <span className="fw-bold d-flex align-items-center">
          <span className="ms-2">
            <BsThreeDotsVertical />
          </span>
          ASSIGNMENTS
        </span>
        <span className="text-dark">40% of Total</span>
        <div className="d-flex align-items-center">
          <Button variant="light" className="border">
            <span className="me-1 text-dark">
              <FaPlus />
            </span>
          </Button>
          <span className="ms-2">
            <BsThreeDotsVertical />
          </span>
        </div>
      </Form>

      <Form 
        className="border rounded mt-2" 
        style={{ width: "100%", maxWidth: "900px" }}
      >
        {[1, 2, 3].map((week) => (
          <Form.Group
            key={week}
            className="p-3 border-start border-success border-3"
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <span className="me-2 text-muted">
                  <BsGripVertical />
                </span>
                <Link to={`/Kambaz/Courses/Assignments/edit/${week}`}
                  className="fw-bold text-dark">
                  A{week}
                </Link>
                <span className="text-danger ms-2">Multiple Modules</span>
                <span className="text-muted ms-2">
                  | <strong>Not available until</strong> May {6 + (week - 1) * 7} at 12:00am
                  | <strong>Due</strong> May {13 + (week - 1) * 7} at 11:59pm | 100 pts
                </span>
              </div>

              <div className="d-flex align-items-center">
                <span className="text-success fs-5">
                  <i className="bi bi-check-circle-fill"></i>
                  <GreenCheckmark />
                </span>
                <BsGripVertical />
                <span className="ms-3"></span>
              </div>
            </div>
          </Form.Group>
        ))}
      </Form>
    </div>
  );
}

