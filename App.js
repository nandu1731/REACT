import React from "react";
import ReactDOM from "react-dom/client";

const jsxElement = <h1>Hi React</h1>; //JSX code (return React element)

const SubComponent=()=>(
    <p>This is child component</p>
)

const MyComponent = () => {
  return (
    <div className="container">
      { jsxElement } 
      <p>
        Here we are rendering jsx code in component using <span>{`{}`}</span>
      </p>
      <SubComponent />
      <SubComponent></SubComponent>
      {SubComponent()} 
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyComponent />);
