/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
 
 
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const USERS_API = `${HTTP_SERVER}/api/users`;
const MODULES_API = `${HTTP_SERVER}/api/modules`;
 
export const deleteModule = async (courseId: string, moduleId: string) => {
const response = await axiosWithCredentials.delete(`${COURSES_API}/${courseId}/modules/${moduleId}`);
return response.data;
};
export const updateModule = async (courseId: string, module: any) => {
  const { data } = await axiosWithCredentials.put(`${COURSES_API}/${courseId}/modules/${module._id}`,
   module
);
  return data;
};
 
 
export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};
export const findModulesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};
export const fetchAllCourses = async () => {
  const { data } = await axiosWithCredentials.get(COURSES_API);
  return data;
};
export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
  return data;
};
export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
  return data;
};
export const deleteCourse = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
  return data;
};
export const updateCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
  return data;
};
export const enrollIntoCourse = async (userId: string, courseId: string) => {
 const response = await axiosWithCredentials.post(`${USERS_API}/${userId}/courses/${courseId}`);
 return response.data;
};
export const unenrollFromCourse = async (userId: string, courseId: string) => {
 const response = await axiosWithCredentials.delete(`${USERS_API}/${userId}/courses/${courseId}`);
 return response.data;
};
export const findUsersForCourse = async (courseId: string) => {
 const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/users`);
 return response.data;
};
export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/assignments`
  );
  return response.data;
};

export const findAssignmentById = async (assignmentId: string) => {
  const { data } = await axiosWithCredentials.get(
    `${HTTP_SERVER}/api/assignments/${assignmentId}`
  );
  return data;
};

export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
  const { data } = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment
  );
  return data;
};

export const updateAssignment = async (assignment: any) => {
  const { data } = await axiosWithCredentials.put(
    `${HTTP_SERVER}/api/assignments/${assignment._id}`,
    assignment
  );
  return data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const { data } = await axiosWithCredentials.delete(
    `${HTTP_SERVER}/api/assignments/${assignmentId}`
  );
  return data;
};

const ENROLLMENTS_API = `${HTTP_SERVER}/api/users`;
const ENROLL_API = `${HTTP_SERVER}/api/enroll`;

// -----------------------------------------------------
// Get all enrollments for a user
// GET /api/users/:userId/enrollments
// -----------------------------------------------------
export const findEnrollmentsForUser = async (userId: string) => {
  const response = await axiosWithCredentials.get(
    `${ENROLLMENTS_API}/${userId}/enrollments`
  );
  return response.data;
};


export const enrollUserInCourse = async (
  userId: string,
  courseId: string
) => {
  const response = await axiosWithCredentials.post(
    `${ENROLL_API}/${userId}/${courseId}`
  );
  return response.data;
};

export const unenrollUserFromCourse = async (
  userId: string,
  courseId: string
) => {
  const response = await axiosWithCredentials.delete(
    `${ENROLL_API}/${userId}/${courseId}`
  );
  return response.data;
};
