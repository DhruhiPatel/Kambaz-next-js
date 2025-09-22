export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label><br/><br/>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br /><br/>
        <table>
          <tr>
            <td align="left" valign="top">
              <label htmlFor="wd-points">Points</label>
              <input id="wd-points" defaultValue={100} />
            </td>
        </tr><br/>
        <tr>
            <td align="left" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
                <select id="wd-select-one-genre" defaultValue="Assignments">
            <option value="Assignment1">ASSIGNMENT1</option>
            <option value="Assignment2">ASSIGNMENT2</option>
            <option value="Assignments">ASSIGNMENTS</option>
            <option value="Assignment3">ASSIGNMENT3</option>
            </select>
            </td>
        </tr><br/>
        <tr>
            <td align="left" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
            <select id="wd-select-one-genre" defaultValue="PERCENTAGE">
            <option value="PERCENTAGE">Percentage</option>
            <option value="LETTERS">Letters</option>
            <option value="GPA">GPA</option>
            <option value="CREDITS">Credits</option>
            </select>
            </td>
        </tr><br/>
        <tr>
            <td align="left" valign="top">
                <label htmlFor="wd-submission-type">Submission</label>
            <select id="wd-select-one-genre" defaultValue="ONLINE">
            <option value="ONLINE">Online</option>
            <option value="OFFLINE">Offline</option>
            </select>
            </td>
        </tr><br/>
        <tr>
           <td align="left" valign="top">
                <label>Online Entry Options</label><br/>
            
            
            <input type="checkbox" name="check-genre" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label><br/>

            <input type="checkbox" name="check-genre" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label><br/>

            <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

            <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annonation">Student Annotation</label><br/>

            <input type="checkbox" name="check-genre" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
        </tr><br/>
        <tr>
            <td align="left" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
              <input id="wd-assign-to" defaultValue="Everyone" />
              </td>
        </tr><br/>
        <tr>
        <label htmlFor="wd-due-date"> Due: </label>
        <input type="date"
       defaultValue="2024-05-13"
       id="wd-due-date"/></tr><br/>
        <tr>
        <label htmlFor="wd-available-from"> Available from: </label>
        <input type="date"
       defaultValue="2024-05-06"
       id="wd-available-from"/>

       <label htmlFor="wd-available-until"> Until: </label>
        <input type="date"
       defaultValue="2024-05-20"
       id="wd-available-until"/></tr><br/><br/>

<tr>
  <td align="right">
    <button type="button">Cancel</button>
    <button type="submit">Save</button>
  </td>
</tr>

      </table>
    </div>
);}
