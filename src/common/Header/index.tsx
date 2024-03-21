import { ReactNode } from "react";

interface HeaderProps {
  title: ReactNode;
}

const Header = ({ title }: HeaderProps) => (
  <header>
    <h1>
      {title}
    </h1>
  </header>
);

export default Header;