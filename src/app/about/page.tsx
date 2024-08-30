import React from "react";

function About() {
  return (
    <div>
      <div className="text-2xl font-bold text-center">About pages</div>

      <div className="flex gap-2 justify-center text-red-400 bg-red-100">
        <div>a</div>
        <div>b</div>
        <div>c</div>
        <div>d</div>
        <div>e</div>
      </div>

      <div
        style={{
          position: "relative",
          height: "100px",
          backgroundColor: "red",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "blue",
          }}
        >
          test
        </div>
      </div>
      {/* <div>test {params.userId}</div> */}
    </div>
  );
}

export default About;
