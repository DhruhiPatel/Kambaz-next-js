/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { PeopleTable } from "./Table/page";
import * as client from "../../client";

export default function CoursePeoplePage() {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    const response = await client.findUsersForCourse(cid as string);
    setUsers(response);
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
