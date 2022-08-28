import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className={"card"}>{children}</div>
);

export { Card };
