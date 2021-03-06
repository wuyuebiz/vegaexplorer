import React from "react";
import TwoColumnData from "../TwoColumnData";

const FeeAccount = ({ rows, type }) => {
  return (
    <>
      <h2>Fee Account ({type})</h2>
      <TwoColumnData rows={rows} />
    </>
  );
};

export default FeeAccount;
