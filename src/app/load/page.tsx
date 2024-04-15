import axios, { AxiosResponse } from "axios";
import React, { Suspense } from "react";
import Loading from "./loading";
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
  console.log(result, "result");
  return (
    <div>
      {/* <Suspense fallback={<div>Load .............</div>}> */}
      {result.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.name}</div>
          </div>
        );
      })}
      {/* </Suspense> */}
    </div>
  );
}

export default page;
