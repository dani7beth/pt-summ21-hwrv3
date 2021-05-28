import React from "react";

const Zoo = ({ zoo }) => {
  const { id, name, location } = zoo;
  return (
    <>
      <h3>{name}</h3>
      <p>
        location: {location}, id: {id}
      </p>
      <a href={`http://localhost:3000/zoos/${id}/exhibits`}>view exhibits</a>
      <br />
      <a href="/">back</a>
    </>
  );
};

export default Zoo;
