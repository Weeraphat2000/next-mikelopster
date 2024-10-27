"use client";
import { useParams, usePathname } from "next/navigation";
import React from "react";

function page({
  params: { userId },
  searchParams: { ab },
}: {
  params: { userId: string };
  searchParams: { ab: string };
}) {
  // http://localhost:3002/about/123?ab=qqwqweeeee

  // มี params และ searchParams ใน page
  console.log(ab, "params in page"); // qqwqweeeee

  const a = useParams();
  const path = usePathname();
  console.log(path, "usePathname"); // /about/123
  console.log(a, "useParams"); // {userId: "123"}

  return (
    <div>
      <div>prop user id == {userId}</div>
      <div>useParams {a.userId}</div>
    </div>
  );
}

export default page;
