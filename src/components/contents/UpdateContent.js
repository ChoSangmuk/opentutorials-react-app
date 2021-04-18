import React, { Component } from 'react';

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc
    }
    this.inputformHandler = this.inputformHandler.bind(this)
  }

  inputformHandler(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <article>
        <h3>Update</h3>
        <form action="/update_process" method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmitComponent(this.state.id, this.state.title, this.state.desc);
          }.bind(this)}>
          <input type="hidden" name="id" value={this.state.id} />
          <p>
            <input type="text" name="title" value={this.state.title} onChange={this.inputformHandler} />
          </p>
          <p>
            <textarea name="desc" value={this.state.desc} onChange={this.inputformHandler} />
          </p>
          <p><input type="submit"></input></p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;