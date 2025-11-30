/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import PeopleDetails from "../Details";
import { useParams } from "next/navigation";
import * as client from "../../../client";

// -----------------------------------------------------
// 1️⃣ YOUR ORIGINAL PeopleTable COMPONENT (NO CHANGES)
// -----------------------------------------------------
export function PeopleTable({
  users = [],
  fetchUsers
}: {
  users?: any[];
  fetchUsers: () => void;
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);

  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowDetails(true);
                    setShowUserId(user._id);
                  }}
                >
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  {user.firstName} {user.lastName}
                </span>
              </td>

              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {showDetails && (
        <PeopleDetails uid={showUserId} onClose={() => setShowDetails(false)} />
      )}
    </div>
  );
}

// -----------------------------------------------------
// 2️⃣ THE ACTUAL PAGE — REQUIRED BY ASSIGNMENT
// -----------------------------------------------------
export default function CoursePeoplePage() {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    if (!cid) return;
    const enrolledUsers = await client.findUsersForCourse(cid as string);
    setUsers(enrolledUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, [cid]);

  return (
    <div className="container mt-4">
      <h2>People Enrolled in this Course</h2>
      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}


{/*
          <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Bruce</span>{" "}
          <span className="wd-last-name">Wayne</span></td>
      <td className="wd-login-id">001234562S</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-11-02</td>
      <td className="wd-total-activity">15:32:43</td></tr>
      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Steve</span>{" "}
          <span className="wd-last-name">Rogers</span></td>
      <td className="wd-login-id">001234563S</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-10-02</td>
      <td className="wd-total-activity">23:32:43</td></tr>
      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Natasha</span>{" "}
          <span className="wd-last-name">Romanoff</span></td>
      <td className="wd-login-id">001234564S</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">TA</td>
      <td className="wd-last-activity">2020-11-05</td>
      <td className="wd-total-activity">13:23:34</td></tr>
      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Thor</span>{" "}
          <span className="wd-last-name">Odinson</span></td>
      <td className="wd-login-id">001234565S</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-12-01</td>
      <td className="wd-total-activity">11:22:33</td></tr>
      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Bruce</span>{" "}
          <span className="wd-last-name">Banner</span></td>
      <td className="wd-login-id">001234566S</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-12-01</td>
      <td className="wd-total-activity">22:33:44</td></tr>
    </tbody>
   </Table>
  </div> );} */}
