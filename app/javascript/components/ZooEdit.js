import React from "react";

const ZooEdit = ({ zoo }) => {
  const { name, id, location } = zoo;
  const defaultName = name ? name : "";
  const defaultLocation = location ? location : "";
  return (
    <>
      <h1>Edit Zoo!</h1>
      <form action={`/zoos/${id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
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
        <button type="Submit">edit</button>
      </form>
    </>
  );
};

export default ZooEdit;
