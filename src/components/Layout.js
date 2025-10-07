import React from 'react';

const Layout = ({ children }) => {
  return (
    <main style={{ minHeight: 'calc(100vh - 160px)' }}>
      {children}
    </main>
  );
};

export default Layout;