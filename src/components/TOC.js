import React, { Component } from 'react'; 

class TOC extends Component {
  render() {
    console.log("TOC render")
    var data = this.props.data;
    var lists = [];
    for (var i = 0; i < data.length; i++){
      lists.push(
        <li key={data[i].id}>
          <a href={"/content/"+data[i].id} onClick={function(e){
            e.preventDefault()
            this.props.onClickComponent()
          }.bind(this)}>{data[i].title}</a>
        </li>);
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