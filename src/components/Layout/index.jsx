import React from "react";

function Layout({ children }) {
  return (
    <div className='bg-slate-200 mt-20 flex flex-col px-10'>{children}</div>
  );
}

export default Layout;
