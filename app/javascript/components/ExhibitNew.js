import React from "react";

const ExhibitNew = ({ exhibit, zoo }) => {
  const { id } = zoo;
  const { name } = exhibit;
  const defaultName = name ? name : "";
  return (
    <>
      <h1>New Exhibit!</h1>
      <form action={`/zoos/${id}/exhibits`} method="post">
        <p>Name</p>
        <input defaultValue={defaultName} name="exhibit[name]" type="text" />
        <button type="submit">add</button>
      </form>
    </>
  );
};

export default ExhibitNew;
