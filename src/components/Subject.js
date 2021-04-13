import React, { Component } from 'react';

class Subject extends Component {
  render() {
    var data = this.props.data;
    return (
      <header>
        <h2><a href="/" onClick={function (e) {
          e.preventDefault()
          this.props.onClickComponent()
        }.bind(this)}>{data.title}</a></h2>
        {data.sub}
      </header>
    );
  }
}

export default Subject;