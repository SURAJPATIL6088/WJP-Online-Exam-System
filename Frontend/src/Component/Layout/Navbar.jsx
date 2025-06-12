import React, { useContext } from "react";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "../../context/AuthContext";
import { getToken, removeToken, storeToken } from "../Service/AdminService";
import { jwtDecode } from "jwt-decode";

const CustomNavbar = ({ isExpanded, setIsExpanded }) => {
  const {
    isAuthenticated,
    setIsAuthenticated,
    role,
    setRole,
    loading,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const token = getToken();
  let userEmail = "";
  if (token) {
    const decode = jwtDecode(token);
    userEmail = decode.sub;
  }

  const handleLogout = () => {
    storeToken("token");
    removeToken();
    setRole(null);
    setIsAuthenticated(false);
    navigate("/signin");
  };

  return (
    <Navbar variant="dark"
      expand="lg"
      fixed="top"
      className="custom-navbar"
      expanded={isExpanded} 
      onToggle={() => setIsExpanded(!isExpanded)}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <img
            src="src/assets/logo.png"
            alt="Vidyarthi Logo"
            height="35"
            className="d-inline-block align-top me-1"
            style={{paddingLeft:'10px'}}
          />
          Vidyarthi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/feedback" className="nav-link">
              Feedback
            </Nav.Link>
          </Nav>

          {!loading && !isAuthenticated && (
            <Nav>
              <Button as={Link} to="/signin" className="me-2 nav-button">
                Sign In
              </Button>
             
            </Nav>
          )}

          {!loading && isAuthenticated && role === "ROLE_STUDENT" && (
            <Nav>
              <Nav.Link as={Link} to="/attempt-exam" className="nav-link">
                My Exams
              </Nav.Link>
              <Dropdown align="end">
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  <img
                    src={
                      "https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-75-512.png"
                    }
                    alt="Profile"
                    width="35"
                    height="35"
                    className="rounded-circle"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.ItemText>
                    <strong>Email:</strong> {userEmail}
                  </Dropdown.ItemText>
                  <Dropdown.ItemText>
                    <strong>Role:</strong> {role?.replace("ROLE_", "")}
                  </Dropdown.ItemText>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={() => navigate("/contact")}>
                    Help
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          )}

          {!loading && isAuthenticated && role === "ROLE_ADMIN" && (
            <Nav>
              <Nav.Link as={Link} to="/manage-exams">
                Manage Exams
              </Nav.Link>
              <Dropdown align="end">
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  <img
                    src={
                      "https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-75-512.png"
                    }
                    alt="Profile"
                    width="35"
                    height="35"
                    className="rounded-circle"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.ItemText>
                    <strong>Email:</strong> {userEmail}
                  </Dropdown.ItemText>
                  <Dropdown.ItemText>
                    <strong>Role:</strong> {role?.replace("ROLE_", "")}
                  </Dropdown.ItemText>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={() => navigate("/contact")}>
                    Help
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
