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

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      depositAmount: 0,
    });
    this.props.handleDeposit(this.state.depositAmount);
  };

  render() {
    // Import or access the props from parent component App via object distructuring
    const { balance, fullname } = this.props;

    return (
      <Form>
        <h2>{`Welcome to the Bank, ${fullname}`}</h2>
        <h2>Your current balance is: {balance}</h2>
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
          onClick={(e) => this.handleSubmit(e)}
        >
          Deposit
        </Button>
      </Form>
    );
  }
}

export default Deposit;
