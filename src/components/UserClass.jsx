import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log('child constructor');
  }

  componentDidMount(){
    console.log('child component mounted');
  }
  render() {
    console.log('child render');
    const { name, age } = this.props;
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
        <p>Name:{name}</p>
        <p>Age:{age}</p>
        <p>No.of days:{count}</p>
      </div>
    );
  }
}
export default UserClass;
