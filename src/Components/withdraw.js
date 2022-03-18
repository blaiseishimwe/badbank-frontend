import React from "react";
import { Form, Button } from "react-bootstrap";

class Withdraw extends React.Component {
  state = {
    withdrawAmount: 0,
  };

  handleOnChange = (e) => {
    this.setState({ withdrawAmount: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      withdrawAmount: 0,
    });
    this.props.handleWithdraw(this.state.withdrawAmount);
  };

  render() {
    // Import or access the props from parent component App via object distructuring
    const { balance, fullname } = this.props;

    return (
      <Form>
        <h2>{`Welcome to the bank, ${fullname}`}</h2>
        <h2>Your current balance is: {balance}</h2>
        <Form.Group className="mb-3" controlId="withdrawAmount">
          <Form.Label>Withdraw Amount</Form.Label>
          {/* <Form.Control type="number" placeholder="Enter withdraw amount" /> */}
          <Form.Control
            type="number"
            value={this.state.withdrawAmount}
            onChange={this.handleOnChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            this.handleSubmit(e);
          }}
        >
          Withdraw
        </Button>
      </Form>
    );
  }
}
export default Withdraw;
