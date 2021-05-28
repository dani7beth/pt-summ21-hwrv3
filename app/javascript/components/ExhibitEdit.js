import React from "react";

const ExhibitEdit = ({ exhibit, zoo }) => {
  const { id } = zoo;
  const { name } = exhibit;
  const defaultName = name ? name : "";
  return (
    <>
      <h1>Edit Exhibit!</h1>
      <form action={`/zoos/${id}/exhibits/${exhibit.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <p>Name</p>
        <input defaultValue={defaultName} name="exhibit[name]" type="text" />
        <button type="submit">edit</button>
      </form>
    </>
  );
};

export default ExhibitEdit;
