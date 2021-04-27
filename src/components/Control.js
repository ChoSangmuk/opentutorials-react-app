import React, { Component } from 'react';

class Control extends Component {
  render() {
    var createFunction =
      <li><a href="/create"
        onClick={function (e) {
          e.preventDefault()
          this.props.onClickComponent("create")
        }.bind(this)}> Create </a></li>;
    var updateFunction =
      <li><a href="/update"
        onClick={function (e) {
          e.preventDefault()
          this.props.onClickComponent("update")
        }.bind(this)}> Update </a></li>;
    var deleteFunction =
      <li><input type="button" value="Delete"
        onClick={function (e) {
          e.preventDefault()
          this.props.onClickComponent("delete")
        }.bind(this)}></input></li>;

    if (this.props.mode === "welcome") {
      return (
        <ul>
          {createFunction}
        </ul>
      );
    } else if (this.props.mode === "read") {
      return (
        <ul>
          {createFunction}
          {updateFunction}
          {deleteFunction}
        </ul>
      );
    } else {
      return (
        <ul></ul>
      )
    }
  }
}

export default Control;