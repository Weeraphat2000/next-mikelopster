// ทำตัวเป็น client component
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

function page() {
  const [data, setData] = useState<
    {
      createdAt: string;
      name: string;
      avatar: string;
      id: string;
    }[]
  >();
  const run = async () => {
    const data = await axios.get(
      "https://661c0128e7b95ad7fa697f72.mockapi.io/api/block/userName"
    );
    setData(data.data);
  };
  useEffect(() => {
    run();
  }, []);

  console.log(data);
  return (
    <div>
      {data?.map((item) => {
        // console.log(item.avatar);
        return (
          <div key={item.id}>
            <div>{item.name}</div>
            <Image src={item.avatar} alt="test" height={100} width={100} />
          </div>
        );
      })}
    </div>
  );
}

export default page;
