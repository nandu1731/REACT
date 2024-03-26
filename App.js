
const para = React.createElement("p", {"id":"para"}, "This is heading");
// console.log(para);
const container=React.createElement('div',{'id':'parent'},[para,React.createElement("div",{'id':'child'},"This is child element")]);
console.log(container);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
