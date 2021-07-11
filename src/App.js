// 클래스 type Component
import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Control from './components/Control';

// content components
import CreateContent from './components/contents/CreateContent';
import ReadContent from './components/contents/ReadContent';
import UpdateContent from './components/contents/UpdateContent';

// CSS
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      selected_content_id: 0,
      subject: { title: "WEB", sub: "World Wide Web" },
      welcome: { title: "Welcome", desc: "Hello, Welcome To Opentutorials React App!" },
      content: [
        { id: 0, title: "HTML", desc: "HTML is for information" },
        { id: 1, title: "CSS", desc: "CSS is for design" },
        { id: 2, title: "JavaScript", desc: "JavaScript is for interactive" }
      ]
    }
  }

  getRowIDByContentID(contents, _id) {
    for (var i = 0; i < contents.length; i++) {
      if (contents[i].id === _id) {
        return i
      }
    }
  }

  getMaxContentID(contents) {
    var max_content_id = 0;
    for (var i = 0; i < contents.length; i++) {
      if (max_content_id < contents[i].id) {
        max_content_id = contents[i].id
      }
    }
    return max_content_id;
  }

  createContent(contents, _id, _title, _desc) {
    return contents.concat({ id: _id, title: _title, desc: _desc })
  }

  readContent(contents, _id) {
    return Object.assign(contents[this.getRowIDByContentID(contents, _id)])
  }

  updateContent(contents, _id, _title, _desc) {
    var tempContents = Array.from(contents)
    tempContents[this.getRowIDByContentID(contents, _id)] = { id: _id, title: _title, desc: _desc }
    return tempContents
  }

  deleteContent(contents, _id) {
    var tempContents = Array.from(contents)
    tempContents.splice(this.getRowIDByContentID(contents, _id), 1);
    return tempContents
  }

  getContentComponent(mode) {
    switch (mode) {
      case "read":
        return <ReadContent data={this.readContent(this.state.content, this.state.selected_content_id)} />
      case "create":
        return <CreateContent
          onSubmitComponent={function (_title, _desc) {
            var max_content_id = this.getMaxContentID(this.state.content) + 1
            this.setState({
              content: this.createContent(this.state.content, max_content_id, _title, _desc),
              mode: "read",
              selected_content_id: max_content_id
            })
          }.bind(this)} />
      case "update":
        return <UpdateContent data={this.readContent(this.state.content, this.state.selected_content_id)}
          onSubmitComponent={function (_id, _title, _desc) {
            this.setState({
              content: this.updateContent(this.state.content, _id, _title, _desc),
              mode: "read"
            })
          }.bind(this)} />
      default:
        return <ReadContent data={this.state.welcome} />
    }
  }

  render() {
    return (
      <div className="App">
        <Subject data={this.state.subject}
          onClickComponent={function () {
            // this.state.mode = "welcome"
            this.setState({ mode: "welcome" })
          }.bind(this)}>
        </Subject>
        <TOC data={this.state.content}
          onClickComponent={function (seleceted_id) {
            this.setState({ mode: "read", selected_content_id: seleceted_id })
          }.bind(this)}>
        </TOC>
        <Control
          mode={this.state.mode}
          onClickComponent={function (selected_mode) {
            if (selected_mode === "delete") {
              var tempContent = this.readContent(this.state.content, this.state.selected_content_id)
              if (window.confirm("Delete " + tempContent.title + ". Do you agree?")) {
                this.setState({
                  mode: "welcome",
                  selected_content_id: 0,
                  content: this.deleteContent(this.state.content, this.state.selected_content_id)
                })
                alert("Delete finished");
              }
            } else {
              this.setState({ mode: selected_mode })
            }
          }.bind(this)}>
        </Control>
        {this.getContentComponent(this.state.mode)}
      </div>
    );
  }
}

export default App;