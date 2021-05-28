import React from "react";

const ZooNew = ({ zoo }) => {
  const { name, location } = zoo;
  const defaultName = name ? name : "";
  const defaultLocation = location ? location : "";
  return (
    <>
      <h1>New Zoo!</h1>
      <form action="/zoos" method="post">
        <input
          placeholder="Name"
          type="text"
          defaultValue={defaultName}
          name="zoo[name]"
        />
        <input
          placeholder="Location"
          type="text"
          defaultValue={defaultLocation}
          name="zoo[location]"
        />
        <button type="submit">add</button>
      </form>
    </>
  );
};

export default ZooNew;
