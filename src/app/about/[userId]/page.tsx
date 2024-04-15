"use client";
import { useParams } from "next/navigation";
import React from "react";

function page({ params: { userId } }: { params: { userId: string } }) {
  const a = useParams();

  return (
    <div>
      <div>prop user id == {userId}</div>
      <div>useParams {a.userId}</div>
    </div>
  );
}

export default page;
