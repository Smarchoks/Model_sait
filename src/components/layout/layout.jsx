import { Outlet } from "react-router";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
