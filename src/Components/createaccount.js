import React from "react";
import { Form, Button } from "react-bootstrap";

class CreateAccount extends React.Component {
  //create a local state for the input value
  state = {
    fullname: "",
    email: "",
    password: "",
  };

  handleOnchange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      fullname: "",
      email: "",
      password: "",
    });
    this.props.handleCreateAccount(this.state);
  };

  render() {
    const { accountInfo } = this.props;
    // const { fullname, email, password } = this.state;
    const user = this.state;
    //accountInfo = this.state;
    console.log(user);
    console.log(user["email"]);
    console.log(accountInfo);

    return (
      <Form>
        <Form.Group className="mb-3" controlId="fullname">
          <Form.Label>Fullname</Form.Label>
          <Form.Control
            type="string"
            name="fullname"
            value={user.fullname}
            placeholder="Enter your fullname"
            onChange={this.handleOnchange}
          />
          <ErrorMessage fieldValue={this.state.fullname} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" aria-required>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={user.email}
            placeholder="Enter email"
            onChange={this.handleOnchange}
          />
          <ErrorMessage fieldValue={this.state.email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={user.password}
            placeholder="Enter password"
            onChange={this.handleOnchange}
          />
          <ErrorMessage fieldValue={this.state.password} />
        </Form.Group>

        {this.state.fullname.length === 0 ||
        this.state.email.length === 0 ||
        this.state.password.length === 0 ? (
          <Button disabled>Submit</Button>
        ) : (
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => this.handleSubmit(e)}
          >
            Submit
          </Button>
        )}
      </Form>
    );
  }
}

function ErrorMessage({ fieldValue }) {
  return (
    <>
      {fieldValue.length === 0 ? (
        <p className="btn-danger">This field is required</p>
      ) : (
        <></>
      )}
    </>
  );
}

export default CreateAccount;
