"use client"
import { useParams } from "next/navigation";
export default function AddPathParameters() {
  const { a, b } = useParams();
  return (
    <div id="wd-add"> <h4>Add Path Parameters</h4>
      {3} + {4} = {parseInt(3 as string) + parseInt(4 as string)}
    </div>
  );
}

