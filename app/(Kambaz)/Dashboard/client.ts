/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

const ENROLLMENTS_API = `${HTTP_SERVER}/api/users`;
const ENROLL_API = `${HTTP_SERVER}/api/enroll`;

// -----------------------------------------------------
// Get all enrollments for a user
// GET /api/users/:userId/enrollments
// -----------------------------------------------------
export const findEnrollmentsForUser = async (userId: string) => {
  const response = await axios.get(
    `${ENROLLMENTS_API}/${userId}/enrollments`
  );
  return response.data;
};

// -----------------------------------------------------
// Enroll a user into a course
// POST /api/enroll/:userId/:courseId
// -----------------------------------------------------
export const enrollUserInCourse = async (
  userId: string,
  courseId: string
) => {
  const response = await axios.post(
    `${ENROLL_API}/${userId}/${courseId}`
  );
  return response.data;
};

// -----------------------------------------------------
// Unenroll a user from a course
// DELETE /api/enroll/:userId/:courseId
// -----------------------------------------------------
export const unenrollUserFromCourse = async (
  userId: string,
  courseId: string
) => {
  const response = await axios.delete(
    `${ENROLL_API}/${userId}/${courseId}`
  );
  return response.data;
};
