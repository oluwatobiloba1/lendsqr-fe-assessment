import React from "react";

export interface ITags {
  style: React.CSSProperties;
  children: React.ReactNode;
}
const Tag: React.FC<ITags> = ({
  style: { backgroundColor, opacity, color, ...rest },
  children,
}) => {
  return (
    <>
      <div
        style={{
          backgroundColor,
          borderRadius: "20px",
          padding: ".125em .5em",
          fontWeight: 500,
          ...rest,
        }}
      >
        <p style={{ textAlign: "center", textTransform: "capitalize", color }}>
          {children}
        </p>
      </div>
    </>
  );
};

export default Tag;
