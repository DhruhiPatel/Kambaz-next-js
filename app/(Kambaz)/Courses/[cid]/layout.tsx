import type { ReactNode } from "react";
import { FaAlignJustify } from "react-icons/fa6";
import { courses } from "../../Database";
import Breadcrumb from "./Breadcrumb";
import CourseNavigation from "./Navigation";
export default async function CoursesLayout({
    children,
    params,
  }: {
    children: ReactNode;
    // typed-routes makes `params` a Promise — type it that way and await it
    params: Promise<{ cid: string }>;
  }) {
    const { cid } = await params;
    const course = courses.find((course) => course._id === cid);
    return (
      <div id="wd-courses">
        <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" />
      <Breadcrumb course={course}/>
      </h2> <hr />
        <div className="d-flex">
    <div className="d-none d-md-block">

                <CourseNavigation cid={cid} />
                </div>
    <div className="flex-fill">

              {children}
              </div>
              </div>
              </div>
    );
  }
