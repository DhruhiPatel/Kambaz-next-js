"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ListGroup,
  ListGroupItem,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { BsGripVertical, BsTrash } from "react-icons/bs";
import { FaPlus, FaEllipsisV, FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { setAssignments, deleteAssignment as deleteAssignmentLocal } from "./reducer";
import * as client from "./client";
import { useEffect, useState } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer
  );
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );

  const [search, setSearch] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const isFaculty = currentUser?.role === "FACULTY";

  // FETCH assignments on load
  const fetchAssignments = async () => {
    const data = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(data));
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  const filteredAssignments = assignments.filter(
    (a) =>
      a.course === cid &&
      a.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: string) => {
    setSelectedId(id);
    setShowConfirm(true);
  };

  const confirmDelete = async () => {
    if (!selectedId) return;

    await client.deleteAssignment(selectedId);
    dispatch(
      setAssignments(assignments.filter((a) => a._id !== selectedId))
    );

    setShowConfirm(false);
    setSelectedId(null);
  };

  return (
    <div id="wd-assignments" className="p-4">
      {/* Top Control Bar */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Form className="w-50">
          <div className="input-group">
            <span className="input-group-text bg-light">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search assignments..."
              className="form-control"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </Form>

        {isFaculty && (
          <div>
            <Button
              variant="danger"
              size="lg"
              id="wd-add-assignment"
              onClick={() =>
                router.push(`/Courses/${cid}/Assignments/new`)
              }
            >
              <FaPlus className="me-2" />
              Assignment
            </Button>
          </div>
        )}
      </div>

      {/* Assignment Group */}
      <ListGroup className="rounded-0" id="wd-assignment-groups">
        <ListGroupItem className="p-0 mb-5 fs-5 border-gray">
          <div className="d-flex justify-content-between align-items-center border p-3 bg-light">
            <div className="d-flex align-items-center">
              <FaEllipsisV className="me-2 text-secondary" />
              <h5 className="mb-0 fw-bold">ASSIGNMENTS</h5>
            </div>

            <div className="d-flex align-items-center">
              <span
                className="badge bg-white text-dark border me-3"
                style={{
                  borderRadius: "999px",
                  padding: "8px 16px",
                  fontSize: "0.85rem",
                }}
              >
                {filteredAssignments.length} Assignment
                {filteredAssignments.length !== 1 ? "s" : ""} Total
              </span>
              <FaEllipsisV className="fs-5 text-secondary" />
            </div>
          </div>

          {/* Assignment List */}
          <ListGroup className="rounded-0">
            {filteredAssignments.map((a) => (
              <ListGroupItem
                key={a._id}
                className="d-flex justify-content-between align-items-center p-3"
              >
                <div>
                  <BsGripVertical className="me-2 fs-4 text-secondary" />
                  <Link
                    href={`/Courses/${cid}/Assignments/${a._id}`}
                    className="fw-bold text-decoration-none text-dark"
                  >
                    {a.title}
                  </Link>
                  <p className="mb-0 text-muted small mt-1">
                    Due {new Date(a.due).toLocaleString()} |{" "}
                    {a.points ?? 100} pts
                  </p>
                </div>

                {isFaculty && (
                  <Button
                    variant="outline-danger"
                    onClick={() => handleDelete(a._id)}
                  >
                    <BsTrash />
                  </Button>
                )}
              </ListGroupItem>
            ))}

            {filteredAssignments.length === 0 && (
              <p className="text-muted mt-3 ps-3">
                No assignments found for this course.
              </p>
            )}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>

      {/* Delete Confirmation Dialog */}
      <Modal
        show={showConfirm}
        onHide={() => setShowConfirm(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this assignment?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowConfirm(false)}
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
