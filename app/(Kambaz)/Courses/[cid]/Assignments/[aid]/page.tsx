"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Form, Button, Row, Col } from "react-bootstrap";
import assignmentsData from "../../../../Database/assignments.json"; 

export default function AssignmentEditor() {
  const params = useParams();
  const { cid, aid } = params;

  const assignment = assignmentsData.find(a => a._id === aid);

  if (!assignment) {
    return <p className="p-4 text-danger">Assignment not found.</p>;
  }

  return (
    <div id="wd-assignments-editor" className="p-4">
      <h2 className="mb-4">{assignment.title}</h2>

      <Form>
        
        <Form.Group className="mb-4" controlId="wd-name">
          <Form.Label className="fw-semibold">Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue={assignment.title} />
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-4" controlId="wd-description">
          <Form.Label className="fw-semibold">Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={8}
            defaultValue={assignment.description || ""}
          />
        </Form.Group>

        {/* Points */}
        <Row className="mb-4">
          <Col md={3}>
            <Form.Group controlId="wd-points" className="d-flex align-items-center">
              <Form.Label className="fw-semibold mb-0 me-2">Points</Form.Label>
              <Form.Control type="number" defaultValue={assignment.points || 100} style={{ width: '300px' }} />
            </Form.Group>
          </Col>
        </Row>

        {/* Assignment Group */}
        <Row className="mb-4">
          <Col md={4}>
            <Form.Group controlId="wd-group" className="d-flex align-items-center">
              <Form.Label className="fw-semibold mb-0 me-2">Assignment Group</Form.Label>
              <Form.Select defaultValue="ASSIGNMENTS" style={{ width: '300px' }}>
                <option>ASSIGNMENT1</option>
                <option>ASSIGNMENT2</option>
                <option>ASSIGNMENTS</option>
                <option>ASSIGNMENT3</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {/* Display Grade */}
        <Row className="mb-4">
          <Col md={4}>
            <Form.Group controlId="wd-display-grade-as" className="d-flex align-items-center">
              <Form.Label className="fw-semibold mb-0 me-2">Display Grade as</Form.Label>
              <Form.Select defaultValue="Percentage" style={{ width: '300px' }}>
                <option>Percentage</option>
                <option>Letters</option>
                <option>GPA</option>
                <option>Credits</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {/* Submission Type */}
        <div className="d-flex align-items-start mb-4">
          <Form.Label className="fw-semibold mb-0 me-2">Submission Type</Form.Label>
          <div className="border p-3 rounded mb-4">
            <Form.Group controlId="wd-submission-type" className="d-flex align-items-center mb-3">
              <Form.Select defaultValue="Online" style={{ width: '300px' }}>
                <option>Online</option>
                <option>Offline</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="wd-online-entry">
              <Form.Label className="fw-semibold mb-2" style={{ minWidth: '140px', display: 'inline-block' }}>
                Online Entry Options
              </Form.Label>
              <div className="ms-3">
                <Form.Check type="checkbox" label="Text Entry" />
                <Form.Check type="checkbox" label="Website URL" defaultChecked />
                <Form.Check type="checkbox" label="Media Recordings" />
                <Form.Check type="checkbox" label="Student Annotation" />
                <Form.Check type="checkbox" label="File Uploads" />
              </div>
            </Form.Group>
          </div>
        </div>

        {/* Assign */}
        <div className="d-flex align-items-start mb-4">
          <Form.Label className="fw-semibold mb-0 me-2">Assign</Form.Label>
          <div className="border p-3 rounded mb-4">
            <Form.Group className="mb-4" controlId="wd-assign-to">
              <Form.Control type="text" defaultValue="Everyone" />
            </Form.Group>

            <Row className="mb-0">
              <Form.Group controlId="wd-due-date">
                <Form.Label className="fw-semibold">Due</Form.Label>
                <Form.Control type="date" defaultValue={assignment.dueDate || "2024-05-15"} />
              </Form.Group>

              <Col md={4}>
                <Form.Group controlId="wd-available-from">
                  <Form.Label className="fw-semibold">Available from</Form.Label>
                  <Form.Control type="date" defaultValue={assignment.availableFrom || "2024-05-06"} style={{ width: '180px' }} />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group controlId="wd-available-until">
                  <Form.Label className="fw-semibold">Until</Form.Label>
                  <Form.Control type="date" defaultValue={assignment.availableUntil || "2024-05-20"} style={{ width: '180px' }} />
                </Form.Group>
              </Col>
            </Row>
          </div>
        </div>

        {/* Cancel & Save Buttons */}
        <div className="text-end mt-4">
          <Link href={`/Courses/${cid}/Assignments`}>
            <Button variant="secondary" className="me-2 px-4">
              Cancel
            </Button>
          </Link>
          <Link href={`/Courses/${cid}/Assignments`}>
            <Button variant="danger" className="px-4">
              Save
            </Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}
