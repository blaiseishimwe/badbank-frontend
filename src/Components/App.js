import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Login from "./login";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import Home from "./home";
import CreateAccount from "./createaccount";
import Logout from "./logout";
import { deposit, withdraw, createaccount, login } from "../api";

class App extends React.Component {
  state = {
    isLoggedIn: false,
    // showLogin: false,
    balance: 0,
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

  handleLogin = (userInfo) => {
    // This get called by the Login component on submit
    // call api to login
    // set the showLogin state to false and isLoggedIn to true
    this.setState({ isLoggedIn: true });
    //console.log(email, password);
    console.log(userInfo);
    window.location.pathname = "/";
  };

  handleLogout = () => {
    // call api to logout
    // reset the isLoggedIn and showLogin states to false
    this.setState({
      isLoggedIn: false,
    });

    window.location.pathname = "/";
  };

  handleWithdraw = async (withdrawAmount) => {
    try {
      // send the withdraw amount to the back-end to handle the withdraw
      const withdrawInfo = await withdraw({
        id: "622cf611e7ef23b4067c26e6",
        withdrawAmount,
      });
      //console.log(depositInfo);
      //console.log(`"amount":${withdrawAmount}`);
      console.log(withdrawInfo);
      console.log(withdrawInfo["balance"]);
      this.setState({ balance: withdrawInfo["balance"] });
      console.log("balance", this.state.balance);
      console.log("withdraw amount", withdrawAmount);
      // if (withdrawInfo["balance"] === undefined) {
      //   alert(withdrawInfo.error);
      // }
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
        id: "622cf611e7ef23b4067c26e6",
        depositAmount,
      });

      console.log(depositInfo);
      console.log(depositInfo["balance"]);
      this.setState({ balance: depositInfo["balance"] });
      console.log("balance", this.state.balance);
      console.log("deposit amount", depositAmount);
      if (depositInfo["balance"] === undefined) {
        alert(depositInfo.error);
      }
    } catch (error) {
      console.log("Failed to connect to API");
      console.log(error);
    }
  };

  handleCreateAccount = async ({ fullName, email, password }) => {
    debugger;
    try {
      // send the deposit amount to the back-end to handle the deposit
      var accountInfo = await createaccount({
        fullname: fullName,
        email,
        password,
      });

      console.log(accountInfo);
      console.log(email);
      // this.setState({ balance: depositInfo["balance"] });
      // console.log("balance", this.state.balance);
      // console.log("deposit amount", depositAmount);
    } catch (error) {
      console.log("Failed to connect to API");
      console.log(error);
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar
            isLoggedIn={this.state.isLoggedIn}
            // toggleLogin={this.toggleLogin}
            // showLogin={this.state.showLogin}
          />

          <Routes>
            <Route
              path="/"
              element={
                // this.state.showLogin === true ? (
                //   <Login handleLogin={this.handleLogin} />
                // ) : (
                <Home
                  isLoggedIn={this.state.isLoggedIn}
                  balance={this.state.balance}
                />
                // )
              }
            ></Route>
            <Route
              path="/createaccount"
              element={
                <CreateAccount
                  handleCreateAccount={this.handleCreateAccount}
                  accountInfo={this.props}
                />
              }
            ></Route>
            <Route
              path="/login"
              element={<Login handleLogin={this.handleLogin} />}
            ></Route>
            <Route
              path="/deposit"
              element={
                <Deposit
                  balance={this.state.balance}
                  handleDeposit={this.handleDeposit}
                />
              }
            ></Route>
            <Route
              path="/withdraw"
              element={
                <Withdraw
                  balance={this.state.balance}
                  handleWithdraw={this.handleWithdraw}
                />
              }
            ></Route>
            <Route
              path="/logout"
              element={<Logout handleLogout={this.handleLogout} />}
            ></Route>
          </Routes>
        </header>
      </div>
    );
  }
}

export default App;
