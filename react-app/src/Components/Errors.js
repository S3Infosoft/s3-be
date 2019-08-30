import React from "react";
import styled from "styled-components";

export default function Errors() {
  return (
    <div>
      <span>
        <div className="container">
          <span className="alert alert-warning text-danger">
            Please Select a valid search query...
          </span>
        </div>
      </span>
    </div>
  );
}
