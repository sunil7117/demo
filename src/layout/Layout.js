import React from "react";

const Layout = () => {
  return <div>{localStorage.getItem("token") ? "ok" : "bye"}</div>;
};

export default Layout;
