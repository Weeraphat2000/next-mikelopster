"use client";

import axios, { AxiosResponse } from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

async function User({ params: { id } }: { params: { id: string } }) {
  const navigate = useRouter();
  console.log(id, "id");

  const data = await axios(
    `https://661c0128e7b95ad7fa697f72.mockapi.io/api/block/userName/${id}`
  ).then((res: AxiosResponse<{ name: string; id: string; avatar: string }>) => {
    const data = res.data;
    return data;
  });
  console.log(data, "data id");
  return (
    <div>
      {" "}
      User : {id}
      <div>{data.name}</div>
      <Image src={data.avatar} width={500} height={500} alt="test" />
      <button
        className="px-4 bg-red-600 py-4"
        onClick={() => {
          console.log("click");
          navigate.push("/load");
          // navigate.back()
          // navigate.forward();
          // navigate.refresh();
        }}
      >
        click
      </button>
    </div>
  );
}

export default User;
