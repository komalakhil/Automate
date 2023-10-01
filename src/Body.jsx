import React from "react";
import Button from "./components/Button";
import Form from "./components/Form";
import Teams from "./components/Teams";

function Body(props) {

  return (
    <div>
      <div className="flex flex-row z-0 mt-44">
        <Form value={props.title}/>
        <Teams/>
      </div>
    </div>
  );
}

export default Body;
