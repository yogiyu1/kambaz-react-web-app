import { useState } from "react";

export default function Modules() {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapseAll = () => {
    setCollapsed(true);
  };

  const handleExpandAll = () => {
    setCollapsed(false);
  };

  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={handleCollapseAll}>Collapse All</button>
        <button onClick={handleExpandAll}>Expand All</button>
        <button onClick={() => alert("View Progress clicked!")}>View Progress</button>
        <select onChange={(e) => alert(`Publish All: ${e.target.value}`)}>
          <option value="" disabled selected>Publish All</option>
          <option value="Publish">Publish</option>
          <option value="Unpublish">Unpublish</option>
        </select>
        <button onClick={() => alert("+ Module clicked!")}>+ Module</button>
      </div>

      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          {!collapsed && (
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
            </ul>
          )}
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          {!collapsed && (
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">Content for Week 2</span>
              </li>
            </ul>
          )}
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          {!collapsed && (
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">Content for Week 3</span>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
