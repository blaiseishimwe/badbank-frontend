import { Navbar, Container, Nav } from "react-bootstrap";

// function MyNav({ isLoggedIn, toggleLogin, showLogin }) {
function MyNav({ isLoggedIn, handleRerouting }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Nav.Link onClick={() => handleRerouting("/")}>BadBank</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* conditionally show different links depending on whether the user is logged in or not */}
            {isLoggedIn ? (
              <>
                <Nav.Link onClick={() => handleRerouting("/deposit")}>
                  Deposit
                </Nav.Link>
                <Nav.Link onClick={() => handleRerouting("/withdraw")}>
                  Withdraw
                </Nav.Link>
                <Nav.Link onClick={() => handleRerouting("/logout")}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link onClick={() => handleRerouting("/createaccount")}>
                  Create Account
                </Nav.Link>
                <Nav.Link onClick={() => handleRerouting("/login")}>
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
