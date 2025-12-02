"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import * as client from "../Courses/client";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  FormControl,
} from "react-bootstrap";
import {
  addNewCourse,
  deleteCourse,
  updateCourse,
  setCourses,
} from "../Courses/reducer";
import { enrollCourse, unenrollCourse } from "../Account/reducer";
import { RootState } from "../store";
import { Courses } from "../Courses/types";

// ✅ Define the shape of a Course
type Course = {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
  description: string;
  term?: string;
}

export default function Dashboard() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );

  // ✅ Redirect if not logged in
  useEffect(() => {
    if (!currentUser) {
      router.replace("/Account/Signin");
    }
  }, [currentUser, router]);

  // Manage state for showing all or my courses
  const [showAll, setShowAll] = useState(false);

  // Manage current editable course
  const [course, setCourse] = useState<Courses>({
    _id: "0",
    name: "New Course",
    number: "CS0000",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    img: "/images/reactjs.jpg",
    description: "New Description",
  });
   const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([ ...courses, newCourse ]));
  };
   const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
  };
   const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c) => {
        if (c._id === course._id) { return course; }
        else { return c; }
    })));};
   const fetchCourses = async () => {
    try {
      const courses = await client.findMyCourses();
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  if (!currentUser) return null;
  const isFaculty = currentUser.role === "FACULTY";
  const enrolledIds: string[] = currentUser.enrolledCourses ?? [];

  const filteredCourses = (courses as Course[]).filter((c: Course) => enrolledIds.includes(c._id));
  
  //  Compute which courses to display
  const visibleCourses = showAll
    ? courses
    : filteredCourses;

  //  Handle course enrollment toggle
  const toggleEnroll = (courseId: string, isEnrolled: boolean) => {
    if (isEnrolled) dispatch(unenrollCourse(courseId));
    else dispatch(enrollCourse(courseId));
  };

  //  Add a new course (Faculty only)
  const handleAddCourse = () => {
    const newCourse = {
      ...course,
      _id: `${Date.now()}`, // unique id
    };

    dispatch(addNewCourse(newCourse));

    // auto-enroll faculty
    if (currentUser.role === "FACULTY") {
      dispatch(enrollCourse(newCourse._id));
    }

    // reset form
    setCourse({
      _id: "0",
      name: "New Course",
      number: "CS0000",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      img: "/images/reactjs.jpg",
      description: "New Description",
    });
  };

  return (
    <div id="wd-dashboard" className="p-4">
      {/* 🔹 Dashboard Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <Button
          variant="primary"
          id="wd-enrollments-toggle"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show My Courses" : "Show All Courses"}
        </Button>
      </div>
      <hr />

      {/* 🔹 Course Creation / Editing (Faculty Only) */}
      {isFaculty && (
        <>
          <h5>
            New Course
            <Button
              className="float-end"
              variant="primary"
              id="wd-add-new-course-click"
              onClick={onAddNewCourse}
            >
              Add
            </Button>
            <Button
              className="float-end me-2"
              variant="warning"
              id="wd-update-course-click"
               onClick={onUpdateCourse}
            >
              Update
            </Button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            placeholder="Course Name"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            as="textarea"
            rows={3}
            value={course.description}
            placeholder="Course Description"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}

      {/* 🔹 Display Published / Enrolled Courses */}
      <h2 id="wd-dashboard-published">
        {showAll ? "All Courses" : "My Courses"} ({visibleCourses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} sm={2} md={3} lg={4} className="gy-4 gx-4 my-4">
          {visibleCourses.map((c: Courses) => {
            const isEnrolled = true;//enrolledIds.includes(c._id);
            return (
              <Col
                key={c._id}
                className="wd-dashboard-course d-flex justify-content-center"
              >
                <Card
                  className="h-100 shadow-sm"
                  style={{ width: "300px", minHeight: "400px" }}
                >
                  <CardImg
                    src={`/images/${c.img}` || "/images/react.js.png"}
                    variant="top"
                    style={{
                      width: "100%",
                      height: "160px",
                      objectFit: "cover",
                    }}
                  />
                  <CardBody>
                    <CardTitle className="text-nowrap overflow-hidden">
                      {c.name}
                    </CardTitle>
                    <CardText
                      className="overflow-hidden"
                      style={{ height: "80px" }}
                    >
                      {c.description || c.term}
                    </CardText>

                    <div className="d-flex justify-content-between align-items-center">
                      {isEnrolled ? (
                        <>
                          <Link
                            href={`/Courses/${c._id}/Home`}
                            className="btn btn-outline-dark"
                          >
                            Go
                          </Link>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => toggleEnroll(c._id, true)}
                          >
                            Unenroll
                          </Button>
                        </>
                      ) : (
                        <Button
                          variant="success"
                          size="sm"
                          onClick={() => toggleEnroll(c._id, false)}
                        >
                          Enroll
                        </Button>
                      )}
                    </div>

                    {isFaculty && (
                      <div className="mt-3 text-end">
                        <Button
                          id="wd-edit-course-click"
                          variant="warning"
                          size="sm"
                          className="me-2"
                          onClick={() => setCourse(c)}
                        >
                          Edit
                        </Button>
                        <Button
                          id="wd-delete-course-click"
                          variant="danger"
                          size="sm"
                          onClick={(event) => { event.preventDefault();
              onDeleteCourse(c._id);
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    )}
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}


{/*}
        <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
        <Card>
        <Link href="/Courses/5438" 
        className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" alt = 'DBMS' src="/images/dbms.jpg" width={200} height={150} />
            <CardBody>
             <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5438 DBMS</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Data Storage and Management</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>
       
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
        <Link href="/Courses/2345" 
        className="wd-dashboard-course-link text-decoration-none text-dark">
        <CardImg variant="top" src="/images/java.jpg"  width={200} height={150} alt="Java" />
        <CardBody>
            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2345 JAVA</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Java Developer</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
        <Link href="/Courses/3456" 
        className="wd-dashboard-course-link text-decoration-none text-dark">
        <CardImg variant="top" src="/images/python.png"  width={200} height={150} alt="Python" />  
        <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3456 PYTHON</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Python Developer</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>
            
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
        <Link href="/Courses/4567" 
        className="wd-dashboard-course-link text-decoration-none text-dark">
        <CardImg variant="top" src="/images/AI.jpg"  width={200} height={150} alt="AI" /> 
        <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4567 Artificial Intelligence</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        AI Developer</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col> 
            
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
        <Link href="/Courses/7543"
        className="wd-dashboard-course-link text-decoration-none text-dark">
        <CardImg variant="top" src="/images/ML.jpg"  width={200} height={150} alt="ML" /> 
        <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS7543 Machine Learning</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        ML Developer</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>     
            
       
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
        <Link href="/Courses/6161" 
        className="wd-dashboard-course-link text-decoration-none text-dark">
        <CardImg variant="top" src="/images/DCN.jpg"  width={200} height={150} alt="Networks" />  
        <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS6161 Data Networks</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Networking and Handling</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col> 
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
        <Link href="/Courses/2555" 
        className="wd-dashboard-course-link text-decoration-none text-dark">
        <CardImg variant="top" src="/images/DS.png"  width={200} height={150} alt="Structures" />  
        <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2555 Data Structures</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Data Handling</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col> 
   </Row>
      </div>
    </div> 
);} */}
