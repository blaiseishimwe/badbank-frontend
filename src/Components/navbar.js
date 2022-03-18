import { Navbar, Container, Nav } from "react-bootstrap";

// function MyNav({ isLoggedIn, toggleLogin, showLogin }) {
function MyNav({ isLoggedIn, handleRerouting }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Nav.Link>
            <a onClick={() => handleRerouting("/")}>BadBank</a>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* conditionally show different links depending on whether the user is logged in or not */}
            {isLoggedIn ? (
              <>
                <Nav.Link>
                  <a onClick={() => handleRerouting("/deposit")}>Deposit</a>
                </Nav.Link>
                <Nav.Link>
                  <a onClick={() => handleRerouting("/withdraw")}>Withdraw</a>
                </Nav.Link>
                <Nav.Link>
                  <a onClick={() => handleRerouting("/logout")}>Logout</a>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link>
                  <a onClick={() => handleRerouting("/createaccount")}>
                    Create Account
                  </a>
                </Nav.Link>
                <Nav.Link>
                  <a onClick={() => handleRerouting("/login")}>Login</a>
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
