import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement =>React Element- Object =>HTMLElement(render)
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

console.log(heading);

//JSX is not HTML in JS
//JSX it is HTML like syntax or we can say XML like syntax
//JSX code is transpiled before reaching to JS Enginee - PARCEL(Manager)- job done by babel
const ele =<span>React Elem</span>
const JSXheading = (
  <h1 id="heading" tabIndex="1">
    {ele}
    Namaste React using JSX
  </h1>
);
console.log(JSXheading);

//React Function Component
const number = 10000;
// const data =api.getData(); if this has malicious data and we cann this data in JSX then due to JSX cross site scripting attcak will be stopped
// JSX is not blinding pushing data it will sanities the data and then execute
const HeadingComponent1 = () => <h1>Namste React Tile</h1>;
const HeadingComponent = () => {
  return (
    <div id="container">
        <HeadingComponent1/>
        {number}
        {JSXheading}
        {HeadingComponent1()}
      <h1>Namste React from Functional Component</h1>
    </div>
  );
};

const HeadingComponent2 = () => (
  <h1 className="heading" tabIndex="1">
    Namste React from Functional Component
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
