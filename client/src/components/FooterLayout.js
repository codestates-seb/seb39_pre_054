import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const FooterLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default FooterLayout;
