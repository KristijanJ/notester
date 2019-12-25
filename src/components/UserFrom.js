import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Form from "./Form";

// REDUX
import { connect } from "react-redux";
import { loginUser } from "../store/actions/userActions";

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formType: "Login"
    };
  }

  render() {
    return (
      <div>
        <div className="form-wrapper">
          <h2>{this.state.formType} form</h2>
          <p>
            <span onClick={() => this.setState({ formType: "Login" })}>Login</span> /{" "}
            <span onClick={() => this.setState({ formType: "Register" })}>Register</span>
          </p>
          <Form formType={this.state.formType} />
        </div>

        <Switch>
          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: () => {
      dispatch(loginUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
