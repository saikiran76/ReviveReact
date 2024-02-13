import React from'react';
import ReactDOM from'react-dom/client';

const heading = React.createElement(
  "h1",
 {id: "child"},
  "Hey there 🚀"
);
// heading is an object

const jsxheading = (
<h1 className = "heading">Using JSX 🚀</h1>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render("heading");


























// const parent =  React.createElement('div', {id: "parent"}, [
//     React.createElement("div", {id: "child1"}, [
//         React.createElement("h1", {}, "Prime header here"),
//         React.createElement("h2", {}, "co-prime (younger brother of prime")
//     ]),
//     React.createElement("div", {id: "child2"}, [
//         React.createElement("h1", {}, "Prime header here"),
//         React.createElement("h2", {}, "co-prime (brother of prime")
//     ]),

// ]);

// console.log(parent);


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);