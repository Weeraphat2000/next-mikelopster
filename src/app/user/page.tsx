// จะทำตัวเป็น server component
import axios, { AxiosResponse } from "axios";
import Link from "next/link";
import React from "react";
interface MyData {
  name: string;
  id: string;
}

async function page() {
  const result = await axios
    .get("https://661c0128e7b95ad7fa697f72.mockapi.io/api/block/userName")
    .then((response: AxiosResponse<MyData[]>) => {
      console.log(response, "response");
      const data = response.data;
      return data;
    });

  return (
    <div>
      {result.map((item) => {
        return (
          <div key={item.id}>
            {/* <button className="px-4 bg-red-600 py-4"> */}
            <Link href={`/user/${item.id}`}>
              <div className="flex gap-5">
                <div>{item.id}</div>
                <div>{item.name}</div>
              </div>
            </Link>
            {/* </button> */}
          </div>
        );
      })}
    </div>
  );
}

export default page;
