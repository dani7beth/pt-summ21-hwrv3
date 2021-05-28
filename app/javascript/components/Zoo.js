import React from "react";

const Zoo = ({ zoo }) => {
  const { id, name, location } = zoo;
  return (
    <>
      <h3>{name}</h3>
      <p>
        location: {location}, id: {id}
      </p>
      <a href="/">back</a>
    </>
  );
};

export default Zoo;
