/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

const ENROLL_API = `${HTTP_SERVER}/api/enroll`;
const USERS_API = `${HTTP_SERVER}/api/users`;

// ✅ Enroll user in course
export const enrollUser = async (userId: string, courseId: string) => {
  const { data } = await axiosWithCredentials.post(
    `${ENROLL_API}/${userId}/${courseId}`
  );
  return data;
};

// ✅ Unenroll user from course
export const unenrollUser = async (userId: string, courseId: string) => {
  const { data } = await axiosWithCredentials.delete(
    `${ENROLL_API}/${userId}/${courseId}`
  );
  return data;
};

// ✅ Get all enrollments for a user
export const findEnrollmentsForUser = async (userId: string) => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/${userId}/enrollments`
  );
  return data;
};
