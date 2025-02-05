import GreenCheckmark from "./GreenCheckmark";
import { Button, Dropdown } from "react-bootstrap";
import { FaCheckCircle, FaPlus } from "react-icons/fa";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="d-flex justify-content-end gap-2">

      <Button variant="secondary" size="lg" id="wd-collapse-all" className="flex-shrink-0">
        Collapse All
      </Button>

      <Button variant="secondary" size="lg" id="wd-view-progress" className="flex-shrink-0">
        View Progress
      </Button>

      <Dropdown>
        <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
          <GreenCheckmark /> Publish All
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item id="wd-publish-all">
            <GreenCheckmark /> Publish All
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-all-modules-and-items">
            <GreenCheckmark /> Publish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-modules-only">
            <GreenCheckmark /> Publish modules only
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle variant="secondary" size="lg" id="wd-unpublish-all-btn">
          <span className="text-danger me-2 fs-5">
            <FaCheckCircle />
          </span>
          Unpublish
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item id="wd-unpublish-all-modules-and-items">
            <span className="text-danger me-2 fs-5">
              <FaCheckCircle />
            </span>
            Unpublish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-modules-only">
            <span className="text-danger me-2 fs-5">
              <FaCheckCircle />
            </span>
            Unpublish modules only
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Button variant="danger" size="lg" id="wd-add-module-btn" className="flex-shrink-0" style={{ minWidth: "180px"}}>
        <span className="me-2 fs-5">
          <FaPlus />
        </span>
        Module
      </Button>
    </div>
  );
}
