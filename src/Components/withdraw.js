import React from "react";
import { Form, Button } from "react-bootstrap";

class Withdraw extends React.Component {
  state = {
    withdrawAmount: 0,
  };

  handleOnChange = (e) => {
    this.setState({ withdrawAmount: Number(e.target.value) });
  };

  render() {
    // Import or access the props from parent component App via object distructuring
    const { balance, handleWithdraw } = this.props;

    return (
      <Form>
        <h1>Your current balance is: {balance}</h1>
        <Form.Group className="mb-3" controlId="withdrawAmount">
          <Form.Label>Withdraw Amount</Form.Label>
          {/* <Form.Control type="number" placeholder="Enter withdraw amount" /> */}
          <input
            type="number"
            value={this.state.withdrawAmount}
            onChange={this.handleOnChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleWithdraw(this.state.withdrawAmount);
          }}
        >
          Withdraw
        </Button>
      </Form>
    );
  }
}
export default Withdraw;
