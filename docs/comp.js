import React from "react";
// import { Img } from "docz";
const Comp = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img
          src="https://hrorbnlicreqs.azurewebsites.net/Images/banner_home1.jpg"
          alt="it's working fine"
          width="200px"
          height="200px"
        />
        <img
          src="https://hrorbnlicreqs.azurewebsites.net/Images/banner_home2.jpg"
          alt="it's working fine"
          width="200px"
          height="200px"
        />
        <img
          src="https://hrorbnlicreqs.azurewebsites.net/Images/banner_home3.jpg"
          alt="it's working fine"
          width="200px"
          height="200px"
        />
      </div>
      {/* <button style={{ color: "blue" }}>click me </button> */}
      {/* <div>The Tribe Show</div> */}
    </div>
  );
};

export default Comp;
