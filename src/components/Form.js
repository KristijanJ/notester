import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        Email: <input />
        Passowrd: <input />
        <input type="submit" value={this.props.formType}/>
      </form>
    )
  }
}

export default Form;