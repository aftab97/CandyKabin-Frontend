import React from "react";

export default function EmailNotice(props) {
  return (
    <div className="email-notice">
      <span>{props.message}</span>
      <button onClick={props.clearResponse}>X</button>
    </div>
  );
}
