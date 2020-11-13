import React, { useRef } from "react";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Test = () => {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef, { behavior: "smooth" });
  return (
    <div>
      <div style={{ height: 100 + "vh", backgroundColor: "lightblue" }}>
        <div>Section 1</div>
        <button onClick={executeScroll}>SCROLL</button>
      </div>
      <div
        style={{
          height: 100 + "vh",
          backgroundColor: "lightred",
        }}
      >
        Section 2
      </div>
      <div
        ref={myRef}
        style={{ height: 100 + "vh", backgroundColor: "lightgreen" }}
      >
        Section 3
      </div>
      <div style={{ height: 100 + "vh", backgroundColor: "lightpink" }}>
        Section 4
      </div>
    </div>
  );
};

export default Test;
