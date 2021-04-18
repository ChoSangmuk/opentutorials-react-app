import React, { Component } from 'react';

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    return !(newProps.data === this.props.data);
  }
  render() {
    var data = this.props.data;
    var lists = [];
    for (var i = 0; i < data.length; i++) {
      lists.push(
        <li key={data[i].id}>
          <a href={"/content/" + data[i].id}
            //data-id={data[i].id}
            onClick={function (seleceted_id, e) {
              e.preventDefault()
              //this.props.onClickComponent(e.target.dataset.id)
              this.props.onClickComponent(seleceted_id)
            }.bind(this, data[i].id)}>{data[i].title}
          </a>
        </li>
      );
    }
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC;