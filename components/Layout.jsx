import React from 'react'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <div className="dark:bg-gray-900 min-h-screen dark:text-white">
      <Header />
      {children}
    </div>
  );
}

export default Layout