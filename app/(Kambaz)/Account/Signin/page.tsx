"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as db from "../../Database";
import { FormControl, Button } from "react-bootstrap";
import type { User } from "../reducer";
 
type Credentials = { username: string; password: string };
 
export default function Signin() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });
 
  const signin = () => {
    const user = (db.users as User[]).find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!user) {
      // optional: show an error toast/message here
      return;
    }
    dispatch(setCurrentUser(user));
    router.replace("/Dashboard");
  };
 
  return (
<div id="wd-signin-screen">
<h3>Sign in</h3>
 
      <FormControl
        id="wd-username"
        placeholder="username"
        className="mb-2"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
 
      <FormControl
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
 
      <Button onClick={signin} id="wd-signin-btn" className="w-100">
        Sign in
</Button>
 
      <Link id="wd-signup-link" href="/Account/Signup">
        Sign up
</Link>
</div>
  );
}