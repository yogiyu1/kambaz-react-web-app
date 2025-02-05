import { Form, Button, Card, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {

  return (
    <div className="container mt-4">
      <h2>Assignment Name</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" defaultValue="A1" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            defaultValue="The assignment is available online. Submit a link to the landing page..."
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Points</Form.Label>
          <Form.Control type="number" defaultValue="100" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Assignment Group</Form.Label>
          <Form.Control as="select">
            <option>ASSIGNMENTS</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Display Grade as</Form.Label>
          <Form.Control as="select">
            <option>Percentage</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
  <Form.Label>Submission Type</Form.Label>
  <Card className="p-3">
    <Form.Group className="mb-3">
      <Form.Label>Submission Type</Form.Label>
      <Form.Control type="text" defaultValue="Online" />


    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label className="fw-bold">Online Entry Options</Form.Label>
      <div className="border p-3 rounded">
        <Form.Check type="checkbox" label="Text Entry" />
        <Form.Check type="checkbox" label="Website URL" defaultChecked />
        <Form.Check type="checkbox" label="Media Recordings" />
        <Form.Check type="checkbox" label="Student Annotation" />
        <Form.Check type="checkbox" label="File Uploads" />
      </div>
    </Form.Group>
  </Card>
</Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Assign</Form.Label>
        <Card className="p-3">
          <Form.Group className="mb-3">
            <Form.Label>Assign to</Form.Label>
            <Form.Control type="text" defaultValue="Everyone" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Due</Form.Label>
            <Form.Control type="datetime-local" defaultValue="2024-05-13T23:59" />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Available from</Form.Label>
                <Form.Control type="datetime-local" defaultValue="2024-05-06T00:00" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Until</Form.Label>
                <Form.Control type="datetime-local" defaultValue="2024-05-28T00:00" />
              </Form.Group>
            </Col>
          </Row>
        </Card>
      </Form.Group>

      <div className="d-flex justify-content-end gap-2">
        <Button variant="secondary">Cancel</Button>
        <Button variant="danger">Save</Button>
      </div>
    </Form>
    </div>

  );
}
