import React from "react";

const url = "http://localhost:3000/zoos/";

const Zoos = ({ zoos }) => {
  return (
    <>
      <h1>Here's all my Zoos!</h1>
      <a href={url + "new"}>add zoo</a>
      <hr />
      {zoos.map((zoo) => (
        <div>
          <h3>{zoo.name}</h3>
          <a href={url + zoo.id} style={{ paddingLeft: "10px" }}>
            show
          </a>
          <a href={url + zoo.id + "/edit"} style={{ paddingLeft: "10px" }}>
            edit
          </a>
          <a
            href={url + zoo.id}
            data-method="delete"
            style={{ paddingLeft: "10px" }}
          >
            delete
          </a>
        </div>
      ))}
    </>
  );
};
export default Zoos;
