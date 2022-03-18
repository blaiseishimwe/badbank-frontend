import Card from "react-bootstrap/Card";
// import photo from "./home_photo.png";

function Home({ isLoggedIn, balance, fullname }) {
  return (
    <>
      {isLoggedIn && <h1>{`Balance: ${balance}`}</h1>}

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="home_photo.png" />
        <Card.Body>
          <Card.Title>
            {`Welcome to the Bank ${isLoggedIn ? ", " + fullname : ""}`}{" "}
          </Card.Title>
          <Card.Text>
            Your Banking Institution for all your banking needs
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Home;
