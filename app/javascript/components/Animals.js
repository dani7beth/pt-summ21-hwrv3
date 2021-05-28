import React from "react";

const Animals = ({ exhibit, animals }) => {
  const { name, id } = exhibit;
  return (
    <>
      <h1>Animals at {name} exhibit</h1>
      {animals.map((animal) => (
        <p>{animal.species}</p>
      ))}
    </>
  );
};
export default Animals;
