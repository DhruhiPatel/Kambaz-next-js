"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People/Table",
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
      
        const href = `/Courses/${cid}/${link}`;

        const isActive = pathname === href;

        return (
          <Link
            key={link}
            href={href}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={`list-group-item border-0 ${
              isActive ? "active text-black" : "text-danger"
            }`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
