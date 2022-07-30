import react from "react";
import { Navigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { isAuthenticated, logout } from "../Auth/AuthAPI";

const NavbarLayout = () => {
  const auth = isAuthenticated();
  const signout = () => {
    if (localStorage.getItem("gl_mfs")) {
      localStorage.removeItem("gl_mfs");
      window.location.href = "/auth/login";
    }
  };

  return (
    <div className="row">
      <div className="col-12 ">
        <Navbar
          fixed="top"
          collapseOnSelect
          className="px-4"
          expand="lg"
          style={{
            backgroundColor: "white",
          }}
        >
          <Navbar.Brand href="/" style={{ color: "black" }}>
            GloVe
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {!auth && (
                <Nav.Link
                  href="/auth/login"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  LOGIN
                </Nav.Link>
              )}

              {auth && (
                <Nav.Link
                  href="/"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  HOME
                </Nav.Link>
              )}

              {auth && (
                <Nav.Link
                  onClick={() => {
                    signout();
                  }}
                  style={{ color: "black", fontWeight: "500" }}
                >
                  LOGOUT
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};
export default NavbarLayout;
