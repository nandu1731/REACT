import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo:{}
    };
    console.log('child constructor');
  }

  async componentDidMount(){
    console.log('child component mounted');
    const response= await fetch(`https://dummyjson.com/users`)
    const data=await response.json();
    this.setState({userInfo:data?.users?.[0]})
  }

  componentDidUpdate(){
    console.log('component updated');
  }

  componentWillUnmount(){
    console.log('component unmounted');
  }

  render() {
    console.log('child render');
    const { firstName, age,gender } = this.state.userInfo;
    const { count } = this.state;
    return (
      <div>
        <p>this is user class component</p>
        <button
          type="button"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Click to update
        </button>
        <p>Name:{firstName}</p>
        <p>Age:{age}</p>
        <p>Gender:{gender}</p>
        <p>No.of days:{count}</p>
      </div>
    );
  }
}
export default UserClass;
