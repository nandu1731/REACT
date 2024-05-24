import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent component mounted");
  }
  render() {
    console.log("Parent render");
    return (
      <div className="m-10">
        <h1>About page</h1>
        <UserContext.Consumer>
          {/* {(value)=> value.name} */}
          {({ name }) => name}
        </UserContext.Consumer>
        <UserClass name="Nandini" age="21" />
        {/* <UserClass name='sindhu' age='19'></UserClass> */}
      </div>
    );
  }
}

export default About;
