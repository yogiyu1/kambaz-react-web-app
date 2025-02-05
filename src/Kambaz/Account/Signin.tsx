import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div id="wd-signin" className="container d-flex justify-content-center align-items-center vh-50">
      <div className="w-10">
        <h2 className="mb-3">Signin</h2>
        <Form>
          <Form.Group className="mb-2">
            <Form.Control type="text" placeholder="username" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
          <Button variant="primary" className="w-100">Signin</Button>
        </Form>
        <Link to="/Signup" className="d-block mt-3">Signup</Link>
      </div>
    </div>
  );
}
