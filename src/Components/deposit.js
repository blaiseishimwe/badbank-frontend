import React from "react";
import { Form, Button } from "react-bootstrap";
class Deposit extends React.Component {
  //create a local state for the input value
  state = {
    depositAmount: 0,
  };

  // function to update the local state as the user type in, the event is tracked by the attribute onChange and the call back function should execute accordingly. use arrow function/anonymous function syntax
  handleOnchange = (e) => {
    this.setState({ depositAmount: e.target.value });
  };

  render() {
    // Import or access the props from parent component App via object distructuring
    const { balance, handleDeposit } = this.props;

    return (
      <Form>
        <h1>Your current balance is: {balance}</h1>
        <Form.Group className="mb-3" controlId="depositAmount">
          <Form.Label>Deposit Amount</Form.Label>
          {/* <Form.Control type="number" placeholder="Enter deposit amount" /> */}
          {/* use input tag, value and onChange to pass input to the local state */}
          <Form.Control
            type="number"
            value={this.state.depositAmount}
            onChange={this.handleOnchange}
          />
        </Form.Group>

        {/* onClick pass the depositAmount to handleDeposit, use arrow function notation and pass the local state depositAmount as an argument since handleDeposit is defined in the parent component */}
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleDeposit(this.state.depositAmount);
          }}
        >
          Deposit
        </Button>
      </Form>
    );
  }
}

export default Deposit;
