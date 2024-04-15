"use client";
import { useParams } from "next/navigation";
import React from "react";

function page({
  params: { userId, id },
}: {
  params: { userId: string; id: string };
}) {
  const a = useParams();
  console.log(userId, id);
  console.log(a, a.userId, a.id);
  return <div>page</div>;
}

export default page;
