import React from "react";
import ReactDOM from "react-dom/client";

/*basic h1 tag in react
const heading=React.createElement("h1",{id:"heading"},"Hello world from react");   //create h1 tag, object and what text in heading // create element is important function in React
const root=ReactDOM.createRoot(document.getElementById("root"));       // now to add text in div root , we need to create a root where all the code is excetued and is present in ReactDOM link
root.render(heading);   //after i create a root , i need to render heading in the root */

//netsed tag in react
/*
<div id="parent">
  <div id="child">
    <h1>hey hello</h1>
  </div>
</div> 
ReactElement is an object => HTML(browser understands*/

const parent=React.createElement("div",{id:"parent"},
  React.createElement("div",{id:"child"}, 
    [React.createElement("h1",{}, "Janhavi Parihar ty it" ),
     React.createElement("h2",{}, "I am learning react" )]  //create an array for siblings  
    )
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);