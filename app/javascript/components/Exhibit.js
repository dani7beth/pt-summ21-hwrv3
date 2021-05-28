import React from "react";

const Exhibit = ({ exhibit, zoo }) => {
  const { name } = exhibit;
  return (
    <>
      <div className="exhibit-card">
        <h1>{name}</h1>
        <h6>Zoo: {zoo.name}</h6>
        <a href={`/zoos`}>zoos</a>
        <a href={`/zoos/${zoo.id}`}>zoo show</a>
        <a href={`/exhibits/${exhibit.id}/animals`}>view animals</a>
      </div>
    </>
  );
};

export default Exhibit;
