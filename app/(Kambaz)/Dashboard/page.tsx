import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/react.js.png"  width={200} height={150} alt="react" />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
        <Link href="/Courses/5438" className="wd-dashboard-course-link">
            <Image alt = 'DBMS' src="/images/dbms.jpg" width={200} height={150} />
            <div>
              <h5> CS5438 DBMS </h5>
              <p className="wd-dashboard-course-title">
                Data Storage and management
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link href="/Courses/2345" className="wd-dashboard-course-link">
        <Image src="/images/java.jpg"  width={200} height={150} alt="Java" />
            <div>
              <h5> CS2345 Java </h5>
              <p className="wd-dashboard-course-title">
                Java Developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link href="/Courses/3456" className="wd-dashboard-course-link">
        <Image src="/images/python.png"  width={200} height={150} alt="Python" />  
            <div>
              <h5> CS3456 Python </h5>
              <p className="wd-dashboard-course-title">
                Python Developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link href="/Courses/4567" className="wd-dashboard-course-link">
        <Image src="/images/AI.jpg"  width={200} height={150} alt="AI" />  
            <div>
              <h5> CS4567 Artificial Intelligence </h5>
              <p className="wd-dashboard-course-title">
                AI Developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link href="/Courses/7543" className="wd-dashboard-course-link">
        <Image src="/images/ML.jpg"  width={200} height={150} alt="ML" />     
            <div>
              <h5> CS7543 Machine Learning </h5>
              <p className="wd-dashboard-course-title">
                ML Developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link href="/Courses/6161" className="wd-dashboard-course-link">
        <Image src="/images/DCN.jpg"  width={200} height={150} alt="Networks" />  
            <div>
              <h5> CS6161 Data Networks </h5>
              <p className="wd-dashboard-course-title">
                Networking and handling
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link href="/Courses/2555" className="wd-dashboard-course-link">
        <Image src="/images/DS.png"  width={200} height={150} alt="Structures" />  
            <div>
              <h5> CS2555 Data Structures </h5>
              <p className="wd-dashboard-course-title">
                Data handling
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
