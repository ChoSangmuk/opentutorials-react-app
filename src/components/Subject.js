import React, { Component } from 'react'; 

class Subject extends Component {
  render() {
    var data = this.props.data;
    return (
      <header>
        <h2>{data.title}</h2>
        {data.sub}
      </header>
    );
  }
}

export default Subject;