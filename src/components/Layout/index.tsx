import React from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
