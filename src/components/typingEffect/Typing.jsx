import React from "react";

function Typing({ fontFamily }) {
  return (
    <div className="w-max">
      <h1
        style={{ fontFamily: `${fontFamily}` }}
        className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-black"
      >
        isxy, wmf.a ujq NdIdj hs'
      </h1>
    </div>
  );
}

export default Typing;
