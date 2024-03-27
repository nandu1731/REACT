import React from 'react';
import ReactDOM from 'react-dom/client';

const para = React.createElement("p", {"id":"para"}, "This is heading");
const container=React.createElement('div',{'id':'parent'},[para,React.createElement("div",{'id':'child'},"This is child element")]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
