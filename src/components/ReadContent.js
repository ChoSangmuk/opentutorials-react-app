import React, { Component } from 'react';

class ReadContent extends Component {
  render() {
    var data = this.props.data
    return (
      <article>
        <h3>{data.title}</h3>
        {data.desc}
      </article>
    );
  }
}

export default ReadContent;