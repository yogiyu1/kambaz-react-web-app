import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
 return (
  <div id="wd-people-table">
   <Table striped>
    <thead>
    <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
    <tr><td className="wd-full-name text-nowrap">
    <span className="me-2 fs-1 text-secondary">
        <FaUserCircle />
    </span>
        <span className="wd-first-name">Tony</span>{" "}
        <span className="wd-last-name">Stark</span></td>
      <td className="wd-login-id">001234561S</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-10-01</td>
      <td className="wd-total-activity">10:21:32</td></tr>
          {/* Bruce Wayne */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <span className="me-2 fs-1 text-secondary">
                <FaUserCircle />
              </span>
              <span className="wd-first-name">Bruce</span>{" "}
              <span className="wd-last-name">Wayne</span>
            </td>
            <td className="wd-login-id">005435384B</td>
            <td className="wd-section">S102</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2024-01-25</td>
            <td className="wd-total-activity">08:15:45</td>
          </tr>

          {/* Steve Rogers */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <span className="me-2 fs-1 text-secondary">
                <FaUserCircle />
              </span>
              <span className="wd-first-name">Steve</span>{" "}
              <span className="wd-last-name">Rogers</span>
            </td>
            <td className="wd-login-id">009876543S</td>
            <td className="wd-section">S103</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2024-01-30</td>
            <td className="wd-total-activity">12:45:10</td>
          </tr>

          {/* Natasha Romanoff */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <span className="me-2 fs-1 text-secondary">
                <FaUserCircle />
              </span>
              <span className="wd-first-name">Natasha</span>{" "}
              <span className="wd-last-name">Romanoff</span>
            </td>
            <td className="wd-login-id">004545321N</td>
            <td className="wd-section">S104</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2024-02-02</td>
            <td className="wd-total-activity">09:32:20</td>
          </tr>
    </tbody>
   </Table>
  </div> );}