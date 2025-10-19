"use client"
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function KambazNavigation() {
  const pathname = usePathname();
  const links = [
    { label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Dashboard", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Inbox",     icon: FaInbox },
    { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
  ];

  return (
     <ListGroup id="wd-kambaz-navigation" style={{ width: 120 }}
         className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">

    <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{ width: 120 }}
              id="wd-kambaz-navigation">

<ListGroupItem className="bg-black border-0 text-center" as="a"
              target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
              <img src="/images/Logo.svg" width="75px" alt="Northeastern University" />
      </ListGroupItem>
      <ListGroupItem as={Link} href="/Account"
        className={`text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser
          className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </ListGroupItem>
      {links.map((li,i) => (
        <ListGroupItem key={`${li.path}-${i}`} as={Link} href={li.path}
          className={`bg-black text-center border-0
              ${pathname.includes(li.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
          {li.icon({ className: "fs-1 text-danger"})}
          <br />
          {li.label}
        </ListGroupItem>
      ))}
       </ListGroup>
       </ListGroup>
       );}

{/*}
     <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/Account" id="wd-account-link" className="text-white text-decoration-none">
         <FaRegCircleUser className="fs-1 text-white" />
         <br />
         Account
       </Link>
     </ListGroupItem>
     <ListGroupItem className="border-0 bg-white text-center">
       <Link href="/Dashboard" id="wd-dashboard-link" className="text-danger text-decoration-none">
         <AiOutlineDashboard className="fs-1 text-danger" />
         <br />
         Dashboard
       </Link>
       </ListGroupItem>
     <ListGroupItem className="border-0 bg-black  text-center">
       <Link href="/Dashboard" id="wd-course-link" className="text-white text-decoration-none">
         <AiOutlineDashboard className="fs-1 text-danger" />
         <br />
         Courses
       </Link>
       </ListGroupItem>
     <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/Calendar" id="wd-calendar-link" className="text-white text-decoration-none">
         <IoCalendarOutline className="fs-1 text-danger" />
         <br />
         Calendar
       </Link>
        </ListGroupItem>
     <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/Inbox" id="wd-inbox-link" className="text-white text-decoration-none">
         <FaInbox className="fs-1 text-danger" />
         <br />
         Inbox
       </Link>
       </ListGroupItem>
     <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/Labs" id="wd-labs-link" className="text-white text-decoration-none">
         <LiaBookSolid className="fs-1 text-danger" />
         <br />
         Labs
       </Link>
       </ListGroupItem>
      </ListGroup>
      </ListGroup>
);}*/}
