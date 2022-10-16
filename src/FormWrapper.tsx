import React, { ReactNode } from "react";

interface IpropType {
  title: string;
  children: ReactNode;
}

export default function FormWrapper({ title, children }: IpropType) {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: 0, marginBottom: "2rem" }}>
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gap: "0.5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto 400px)",
        }}
      >
        {children}
      </div>
    </>
  );
}
