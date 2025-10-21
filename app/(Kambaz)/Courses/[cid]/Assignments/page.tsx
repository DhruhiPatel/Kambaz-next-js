"use client"; // must be first line

import Link from "next/link";
import { useParams } from "next/navigation";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus, FaEllipsisV } from "react-icons/fa";
import LessonControlButtons from "./LessonControlButtons";
import assignmentsData from "../../../Database/assignments.json"; 

export default function Assignments() {
  const params = useParams();
  const courseId = params.cid;

  // Filter assignments for this course
  const assignments = assignmentsData.filter(a => a.course === courseId);

  return (
    <div id="wd-assignments" className="p-4">
      {/* Control Buttons */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="form-control w-50"
          id="wd-search-assignment"
        />
        <div>
          <Button
            variant="danger"
            size="lg"
            className="me-1 float-end"
            id="wd-add-assignment"
          >
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="me-1 float-end"
            id="wd-add-assignment-group"
          >
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
          </Button>
        </div>
      </div>

      <ListGroup className="rounded-0" id="wd-assignment-groups">
        <ListGroupItem className="wd-assignment-group p-0 mb-5 fs-5 border-gray">
          <div className="d-flex justify-content-between align-items-center border p-3 bg-light">
            <div className="d-flex align-items-center">
              <FaEllipsisV className="me-2 text-secondary" />
              <h5 className="mb-0 fw-bold">ASSIGNMENTS</h5>
            </div>

            <div className="d-flex align-items-center">
              <span
                className="badge bg-white text-dark border me-3"
                style={{ borderRadius: "999px", padding: "8px 16px", fontSize: "0.85rem" }}
              >
                {assignments.length} Assignment{assignments.length !== 1 ? "s" : ""} Total
              </span>
              <Button variant="light" className="border me-2">
                <FaPlus />
              </Button>
              <FaEllipsisV className="fs-5 text-secondary" />
            </div>
          </div>

          {/* Assignment List */}
          <ListGroup className="wd-assignments rounded-0">
            {assignments.map(assignment => (
              <ListGroupItem key={assignment._id} className="wd-assignment p-3 ps-2">
                <BsGripVertical className="me-2 fs-3" />
                <Link
                  href={`/Courses/${courseId}/Assignments/${assignment._id}`}
                  className="wd-assignment-link fw-bold"
                >
                  {assignment.title}
                </Link>
                <LessonControlButtons />
                <p className="mb-0 text-muted small mt-2">
                  <span className="fw-bold text-danger">Multiple Modules</span> | Not
                  available yet | Due TBD | 100 pts
                </p>
              </ListGroupItem>
            ))}

            {assignments.length === 0 && (
              <p className="text-muted mt-3 ps-3">No assignments found for this course.</p>
            )}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
