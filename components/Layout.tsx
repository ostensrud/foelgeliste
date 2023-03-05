import { ReactElement } from "react";
import { AppHeader } from "./header";

interface LayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <AppHeader />
      {children}
    </div>
  );
};

export { Layout };
