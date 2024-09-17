"use client";
import { useParams } from "next/navigation";
import React from "react";

function page({
  params: { userId },
  searchParams: { ab },
}: {
  params: { userId: string };
  searchParams: { ab: string };
}) {
  // มี params และ searchParams ใน page
  console.log(ab, "params in page");

  const a = useParams();

  return (
    <div>
      <div>prop user id == {userId}</div>
      <div>useParams {a.userId}</div>
    </div>
  );
}

export default page;
