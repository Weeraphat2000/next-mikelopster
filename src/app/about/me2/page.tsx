// จะทำตัวเป็น server component
import axios, { AxiosResponse } from "axios";
import React from "react";
interface MyData {
  name: string;
  id: string;
}

async function page() {
  // const data = async () => {
  //   const result = await axios(
  //     "https://661c0128e7b95ad7fa697f72.mockapi.io/api/block/userName"
  //   ).then((response: AxiosResponse<MyData[]>) => {
  //     const result: MyData[] = response.data;
  //     return result;
  //   });
  //   return result;
  // };
  //   const result = await data();
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
            <div>{item.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default page;
