import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signin" className="container d-flex justify-content-center align-items-center vh-50">
      <div className="w-10">
        <h2 className="mb-3">Signup</h2>
        <Form>
          <Form.Group className="mb-2">
            <Form.Control type="text" placeholder="username" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control type="verify password" placeholder="verify passwordd" />
          </Form.Group>
          <Button variant="primary" className="w-100">Sign up</Button>
        </Form>
        <Link to="/Signup" className="d-block mt-3">Sign in</Link>
      </div>
    </div>
  );
}
