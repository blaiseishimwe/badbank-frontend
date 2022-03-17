import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

// function MyNav({ isLoggedIn, toggleLogin, showLogin }) {
function MyNav({ isLoggedIn }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Nav.Link>
            <Link to="/">BadBank</Link>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/createaccount">Create Account</Link>
            </Nav.Link>

            {/* conditionally show different links depending on whether the user is logged in or not */}
            {isLoggedIn ? (
              <>
                <Nav.Link>
                  <Link to="/deposit">Deposit</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/withdraw">Withdraw</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/logout">Logout</Link>
                </Nav.Link>
              </>
            ) : (
              <Nav.Link>
                <Link to="/login">Login</Link>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
