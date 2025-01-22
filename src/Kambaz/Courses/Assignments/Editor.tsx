export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor" style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>

        <h2>Assignment Name</h2>
        <input id="wd-name" value="A1 - ENV + HTML" style={{ width: "100%", marginBottom: "10px" }} />
        <textarea
          id="wd-description"
          cols={46}
          rows={8}
          style={{ width: "100%", marginBottom: "20px" }}
        >
          The assignment is available online. Submit a link to the landing page of your web
          application running on Netlify. The landing page should include the following: Your full
          name, section links to each of the lab assignments, links to the Kanbas application, and
          all relevant source code repositories. The Kanbas application should include a link to
          navigate back to the landing page.
        </textarea>
  
        <div style={{ marginBottom: "20px" }}>
          <h3>Submission Type</h3>
          <select id="wd-submission-type" style={{ width: "100%", marginBottom: "10px" }}>
            <option value="Online">Online</option>
            <option value="In-Person">In-Person</option>
          </select>
          <fieldset style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
            <legend>Online Entry Options</legend>
            <div>
              <input type="checkbox" id="wd-online-text" />
              <label htmlFor="wd-online-text">Text Entry</label>
            </div>
            <div>
              <input type="checkbox" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
            </div>
            <div>
              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
            </div>
            <div>
              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
            </div>
            <div>
              <input type="checkbox" id="wd-file-uploads" />
              <label htmlFor="wd-file-uploads">File Uploads</label>
            </div>
          </fieldset>
        </div>
  
        <div style={{ marginBottom: "20px" }}>
          <h3>Assign</h3>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tr>
              <td style={{ textAlign: "right", paddingRight: "10px", verticalAlign: "middle" }}>
                <label htmlFor="wd-text-fields-people">Assign to</label>
              </td>
              <td>
                <input
                  placeholder="Everyone"
                  id="wd-text-fields-people"
                  style={{ width: "98%" }}
                />
              </td>
            </tr>
  
            <tr>
              <td style={{ textAlign: "right", paddingRight: "10px", verticalAlign: "middle" }}>
                <label htmlFor="wd-due-date">Due</label>
              </td>
              <td>
                <input
                  type="date"
                  id="wd-due-date"
                  value="2024-05-13"
                  style={{ width: "99%" }}
                />
              </td>
            </tr>
  
            <tr>
  <td style={{ textAlign: "right", paddingRight: "10px", verticalAlign: "middle" }}>
    <label htmlFor="wd-available-from">Available from</label>
  </td>
  <td style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <input
      type="date"
      id="wd-available-from"
      value="2024-05-06"
      style={{ flex: "1" }}
    />
    <label htmlFor="wd-available-until" style={{ whiteSpace: "nowrap" }}>Until</label>
    <input
      type="date"
      id="wd-available-until"
      value="2024-05-28"
      style={{ flex: "1" }}
    />
  </td>
</tr>

          </table>
        </div>
  
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <button style={{ padding: "5px 10px" }}>Cancel</button>
          <button style={{ padding: "5px 10px" }}>Save</button>
        </div>
      </div>
    );
  }
  