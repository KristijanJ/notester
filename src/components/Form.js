import React, { Component } from "react";
import { connect } from "react-redux";
import { authenticateUser } from "../store/actions/userActions";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("FORM SUBMITTED");

    let newUser = {
      email: this.state.email,
      password: this.state.password
    };

    if (this.props.formType === "Login") {
      let userExists = this.props.users.filter(
        user => user.email === newUser.email
      );
      if (userExists.length > 0) {
        userExists[0].password === newUser.password
          ? this.props.authenticateUser(newUser, this.props.formType)
          : console.log("Incorrect password");
      } else {
        console.log("User does not exist");
      }
    } else {
      this.props.authenticateUser(newUser, this.props.formType);
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Email:{" "}
        <input
          ref="email"
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        Passowrd:{" "}
        <input
          ref="password"
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <input type="submit" value={this.props.formType} />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.userReducer.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authenticateUser: (user, type) => {
      dispatch(authenticateUser(user, type));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
