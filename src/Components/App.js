import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar";
import Login from "./login";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import Home from "./home";
import CreateAccount from "./createaccount";
import Logout from "./logout";
import Alert from "./alert";
import { deposit, withdraw, createaccount, login } from "../api";

class App extends React.Component {
  state = {
    nextPath: "/",
    isLoggedIn: false,
    // showLogin: false,
    balance: 0,
    balance_id: undefined, // will get set upon signing in or creating an account
    email: undefined, // will get set upon signing in or creating an account
    fullname: undefined,
    error: undefined,
  };

  // toggleLogin = () => {
  //   // if we are not logged in show the login page
  //   if (this.state.isLoggedIn !== true) {
  //     this.setState({
  //       showLogin: !this.state.showLogin,
  //     });
  //   } else {
  //     this.handleLogout();
  //   }
  // };

  handleLogin = async ({ email, password }) => {
    try {
      // send the deposit amount to the back-end to handle the deposit
      var accountInfo = await login({
        //fullname: fullname,
        email,
        password,
      });

      this.setState({
        fullname: accountInfo.fullname,
        isLoggedIn: true,
        balance: accountInfo.balance,
        email: accountInfo.email,
        balance_id: accountInfo._id,
        nextPath: "/",
      });
    } catch (error) {
      console.log("Failed to connect to API");
      console.log(error);
    }
  };
  // This get called by the Login component on submit
  // call api to login
  // set the showLogin state to false and isLoggedIn to true
  // this.setState({ isLoggedIn: true });
  //console.log(email, password);

  handleLogout = () => {
    // call api to logout
    // reset the isLoggedIn and showLogin states to false
    this.setState({
      isLoggedIn: false,
      nextPath: "/",
    });
  };

  handleWithdraw = async (withdrawAmount) => {
    try {
      // send the withdraw amount to the back-end to handle the withdraw
      const withdrawInfo = await withdraw({
        id: this.state.balance_id,
        withdrawAmount: Number(withdrawAmount),
      });

      if (withdrawInfo.error) {
        return this.setState({
          error: withdrawInfo.error,
        });
      }

      this.setState({
        balance: withdrawInfo.balance,
        error: undefined,
      });
    } catch (error) {
      console.log("Failed to connect to API");
      console.log(error);
    }
    //console.log("balance ", this.state.balance);
    //console.log("withdraw amount ", withdrawAmount);
  };

  handleDeposit = async (depositAmount) => {
    try {
      // send the deposit amount to the back-end to handle the deposit
      const depositInfo = await deposit({
        id: this.state.balance_id,
        depositAmount: Number(depositAmount),
      });

      if (depositInfo.error) {
        return this.setState({
          error: depositInfo.error,
        });
      }

      this.setState({
        balance: depositInfo.balance,
        error: undefined,
      });
    } catch (error) {
      console.log("Failed to connect to API");
      console.log(error);
    }
  };

  handleCreateAccount = async ({ fullname, email, password }) => {
    try {
      // send the deposit amount to the back-end to handle the deposit
      var accountInfo = await createaccount({
        fullname: fullname,
        email,
        password,
      });

      if (accountInfo.error) {
        return this.setState({
          error: accountInfo.error,
        });
      }

      this.setState({
        isLoggedIn: true,
        balance: accountInfo.balance,
        email: accountInfo.email,
        fullname: accountInfo.fullname,
        balance_id: accountInfo._id,
        nextPath: "/",
        error: undefined,
      });
    } catch (error) {
      console.log("Failed to connect to API");
      console.log(error);
    }
  };

  handleRerouting = (path) => {
    this.setState({
      nextPath: path,
    });
  };

  renderComponentByPath = (path) => {
    switch (path) {
      case "/createaccount":
        return (
          <CreateAccount
            handleCreateAccount={this.handleCreateAccount}
            accountInfo={this.props}
          />
        );

      case "/login":
        return (
          <Login handleLogin={this.handleLogin} accountInfo={this.props} />
        );

      case "/deposit":
        return (
          <Deposit
            balance={this.state.balance}
            handleDeposit={this.handleDeposit}
            fullname={this.state.fullname}
          />
        );

      case "/withdraw":
        return (
          <Withdraw
            balance={this.state.balance}
            handleWithdraw={this.handleWithdraw}
            fullname={this.state.fullname}
          />
        );

      case "/logout":
        return <Logout handleLogout={this.handleLogout} />;
      default:
        return (
          <Home
            isLoggedIn={this.state.isLoggedIn}
            balance={this.state.balance}
            fullname={this.state.fullname}
          />
        );
        break;
    }
  };

  componentDidMount() {
    // make sure we don't carry around old error state from other components
    this.setState({
      error: undefined,
    });
  }

  render() {
    const path = this.state.nextPath;
    return (
      <div className="App">
        <header className="App-header">
          <Navbar
            isLoggedIn={this.state.isLoggedIn}
            handleRerouting={this.handleRerouting}
          />
          {this.state.error !== undefined && <Alert error={this.state.error} />}
          {this.renderComponentByPath(this.state.nextPath)}
        </header>
      </div>
    );
  }
}

export default App;
