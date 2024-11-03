import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components/index";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
