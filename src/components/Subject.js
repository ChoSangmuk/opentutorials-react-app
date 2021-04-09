import React, { Component } from 'react'; 

class Subject extends Component {
  render() {
    return (
      <header>
        <h2>{this.props.title}</h2>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;