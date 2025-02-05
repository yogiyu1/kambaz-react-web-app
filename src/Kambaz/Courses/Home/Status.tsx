import { Button, ListGroup } from "react-bootstrap";
import { FaCloudUploadAlt, FaHouseUser, FaChartBar, FaBell, FaStream, FaNewspaper } from "react-icons/fa";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="p-3 border rounded bg-light" style={{ width: "300px", minWidth: "300px", whiteSpace: "nowrap" }}>
      <h5 className="mb-3">Course Status</h5>

      <div className="d-flex gap-2 mb-2">
        <Button variant="secondary" className="w-50"> Unpublish</Button>
        <Button variant="success" className="w-50">Publish</Button>
      </div>

      <ListGroup>
      <ListGroup.Item className="bg-secondary text-black">
        <span className="d-flex align-items-center">
          <span className="me-2">
              <FaCloudUploadAlt />
            </span>
          <span>Import Existing Content</span>
        </span>
      </ListGroup.Item>

      <ListGroup.Item className="bg-secondary text-black">
        <span className="d-flex align-items-center">
          <span className="me-2">
              <FaCloudUploadAlt />
            </span>
          <span>Import from Commons</span>
        </span>
      </ListGroup.Item>

      <ListGroup.Item className="bg-secondary text-black">
        <span className="d-flex align-items-center">
          <span className="me-2">
              <FaHouseUser />
            </span>
          <span>Choose Home Page</span>
        </span>
      </ListGroup.Item>

      <ListGroup.Item className="bg-secondary text-black">
        <span className="d-flex align-items-center">
          <span className="me-2">
              <FaStream />
            </span>
          <span>View Course Stream</span>
        </span>
      </ListGroup.Item>

        
        <ListGroup.Item className="bg-secondary text-black">
          <span className="d-flex align-items-center">
            <span className="me-2">
                <FaNewspaper />
              </span>
            <span>New Announcement</span>
          </span>
        </ListGroup.Item>

        <ListGroup.Item className="bg-secondary text-black">
          <span className="d-flex align-items-center">
            <span className="me-2">
                <FaChartBar />
              </span>
            <span>New Analytics</span>
          </span>
        </ListGroup.Item>

        <ListGroup.Item className="bg-secondary text-black">
          <span className="d-flex align-items-center">
            <span className="me-2">
                <FaBell />
              </span>
            <span>View Course Notifications</span>
          </span>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
