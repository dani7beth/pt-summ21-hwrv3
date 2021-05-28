import React from "react";

const Exhibits = ({ exhibits, zoo }) => {
  const { name, id } = zoo;
  return (
    <>
      <h1>Exhibits at {name}</h1>
      <a href={`/zoos/${id}`}>back to zoo show</a>
      <br />
      <a href={`/`}>back to zoos</a>
      <br />
      <a href={`/zoos/${id}/exhibits/new`}>exhibit new</a>
      <br />
      {exhibits.map((exhibit) => (
        <div key={exhibit.id}>
          <h3>{exhibit.name}</h3>
          <p>{exhibit.body}</p>
          <a
            href={`/zoos/${zoo.id}/exhibits/${exhibit.id}`}
            style={{ paddingLeft: "10px" }}
          >
            exhibit show
          </a>
          <a
            href={`/zoos/${zoo.id}/exhibits/${exhibit.id}/edit`}
            style={{ paddingLeft: "10px" }}
          >
            exhibit edit
          </a>
          <a
            href={`/zoos/${zoo.id}/exhibits/${exhibit.id}`}
            data-method="delete"
            style={{ paddingLeft: "10px" }}
          >
            exhibit delete
          </a>
        </div>
      ))}
    </>
  );
};

export default Exhibits;
