import Link from "next/link";
import Image from "next/image";
import {Row, Col,Card, CardImg, CardTitle, CardText, Button, CardBody } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">

        <Row xs={1} md={5} className="g-4">

        <Col className="wd-dashboard-course"  style={{ width: "300px" }}>
        <Card>
          <Link href="/Courses/1234/Home" 
          className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/react.js.png"  width={200} height={150} alt="react" />
            <CardBody>
             <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Full Stack software developer</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>

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
);}
