import React from "react";
import ReactDOM from "react-dom/client";

// const headingnew = React.createElement("h1",{id: "headingNew"}, "Hello World from App.js file");
// console.log("headingnew"); // return a object
// root.render(headingnew);

// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
// console.log(heading); // return a object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/**
 * <div id="parent">
 * <div id="child">
 * <h1 > I am h1 tag </h1>
 * </div>
 * </div>
 */


const parent2 = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", {}, "I am h1 tag")));


/**
 * <div id="parent">
 * <div id="child">
 * <h1 > I am h1 tag </h1>
 * <h2 > I am h2 tag </h2>
 * </div>
 * </div>
 */
const parent1 = React.createElement("div", 
{ id: "parent" }, 
React.createElement("div", { id: "child" }, 
[React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]
));


/**
 * <div id="parent">
 * <div id="child">
 * <h1 > I am h1 tag </h1>
 * <h2 > I am h2 tag </h2>
 * </div>
 * <div id="child2">
 * <h1 > I am h1 tag </h1>
 * <h2 > I am h2 tag </h2>
 * </div>
 * </div>
 */

const parent = React.createElement("div", 
{ id: "parent" }, 
[React.createElement("div", { id: "child" }, 
[React.createElement("h1", {}, "I am h1 tag"), React.createElement("h1", {}, "Namste React "), React.createElement("h1", {}, "Namste React newwwww "),React.createElement("h2", {}, "I am h2 tag")]
),
React.createElement("div", { id: "child2" }, 
[React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]
)]
);

// console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
