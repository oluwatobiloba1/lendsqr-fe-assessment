import React from "react";
import "./logo.scss";
export interface ILendSqrLogo {
  width: number;
  height?: number;
}
const LendSqrLogo: React.FC<ILendSqrLogo> = ({ width }) => {
  return (
    <>
      <img className="logo" src="/logo.svg" alt="LendSqr" width={width} />
    </>
  );
};

export default LendSqrLogo;
