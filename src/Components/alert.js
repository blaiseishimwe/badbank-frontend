import { Alert, Button } from "react-bootstrap";
import { useState } from "react";
function MyAlert(props) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{props.error}</p>
      </Alert>
    );
  }
  // return <></>;
  return (
    <Button variant="danger" onClick={() => setShow(true)}>
      Show Error
    </Button>
  );
}

export default MyAlert;
