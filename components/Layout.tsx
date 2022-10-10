import { ReactElement } from "react";
import { Summary } from "./Summary";

interface LayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Summary />
      {children}
    </div>
  );
};

export { Layout };
