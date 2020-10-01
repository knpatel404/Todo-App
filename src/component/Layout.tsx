import React from 'react';
import Header from './Header';

const Layout = (props: any) => {
  return (
    <>
      <Header title="Awesome" />
      {props.children}
    </>
  );
}

export default Layout;