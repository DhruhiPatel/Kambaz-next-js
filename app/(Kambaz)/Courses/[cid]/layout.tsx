import type { ReactNode } from "react";
import { FaAlignJustify } from "react-icons/fa6";
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
   
    return (
      <div id="wd-courses">
        <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" />
      Course {cid} </h2> <hr />
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
