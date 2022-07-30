import { FC } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
interface Props {
  children: any;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="row">
      <div className="col-12">
        <Navbar />
      </div>
      <div
        className="col-12"
        style={{
          minHeight: "89.1vh",
          paddingTop: "3%",
          backgroundColor: "#eeee",
        }}
      >
        {children}
      </div>
      <div className="col-12 py-0">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
