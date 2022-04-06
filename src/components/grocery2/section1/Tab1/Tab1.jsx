import React from "react";
import { Player } from "video-react";

const Tab1 = () => {
  return (
    <div
      style={{
        padding: "0",
        borderRadius: "4px",
      }}
    >
      <video
        width="100%"
        height="100%"
        autoPlay
        loop
        muted
        style={{ borderRadius: "10px" }}
      >
        <source src="/video/Sahand.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Tab1;
