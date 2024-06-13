import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-3xl p-3">Conatct Us page</h1>
      <div className="m-auto ">
        <input
          type="text"
          className="p-2 border-black border-2"
          placeholder="fname"
        />
        <input
          type="text"
          className="p-2 border-black border-2"
          placeholder="lname"
        />
        <button type="button" className="p-2 bg-black text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
