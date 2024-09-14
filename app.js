import React from "react";
import ReactDOM from "react-dom/client";

//JSX(transpiled before it reaches to JSX) =>Parcel-Babel
//JSX => babel transpiles it to ReactElement => JS Object => HTML element (render)

//create React componenets
const title = (
  <h1 className="head" tabIndex="5">
    Namaste react!!!
  </h1>
);

const number = 1000;
//any piece of js runs in this {} braces

const Para = () => (
  <div id="cointainer">
    {title}
    <h3>{number}</h3>  
    <h3 className="paragraph">
      I am learning react from namaste react
    </h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Para />);