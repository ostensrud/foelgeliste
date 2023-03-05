import { ReactElement } from "react";
import { Footer } from "./footer";
import { AppHeader } from "./header";

interface LayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <AppHeader />
      {children}
      <Footer />
    </div>
  );
};

export { Layout };
