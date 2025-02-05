import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile" className="container d-flex justify-content-center align-items-center vh-50">
      <div className="w-20">
        <h2 className="mb-3">Profile</h2>
        <Form>
          <Form.Group className="mb-2">
            <Form.Control type="text" defaultValue="alice" placeholder="username" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control type="password" defaultValue="123" placeholder="password" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control type="text" defaultValue="Alice" placeholder="First Name" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control type="text" defaultValue="Wonderland" placeholder="Last Name" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control type="date" defaultValue="2000-01-01" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control type="email" defaultValue="alice@wonderland" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-2">
          <select className="form-select" defaultValue="FACULTY">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
          </select>

          </Form.Group>
          <Button variant="danger" className="w-100">Update Profile</Button>

        </Form>
        <Link to="/Kambaz/Account/Signin" className="d-block mt-3">Sign out</Link>
      </div>
    </div>
  );
}
