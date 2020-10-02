import React from 'react';

interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => {
  return <div className="header-section">{props.title}</div>;
};

export default Header;
