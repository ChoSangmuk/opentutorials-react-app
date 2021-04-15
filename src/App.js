// 함수 type
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// 클래스 type
import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import ReadContent from './components/ReadContent';
import UpdateContent from './components/UpdateContent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 2;
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

  getContent() {
    var _content = null
    if (this.state.mode === "welcome") {
      _content = <ReadContent title={this.state.welcome.title} desc={this.state.welcome.desc} />
    } else if (this.state.mode === "read") {
      for (var i = 0; i < this.state.content.length; i++) {
        if (this.state.content[i].id === this.state.selected_content_id) {
          _content = <ReadContent title={this.state.content[i].title} desc={this.state.content[i].desc} />
          break;
        }
      }
    } else if (this.state.mode === "create") {
      _content = <CreateContent onSubmitComponent={function (_title, _desc) {
        this.max_content_id++;
        this.setState({
          content: this.state.content.concat({ id: this.max_content_id, title: _title, desc: _desc })
        })
      }.bind(this)} />
    } else if (this.state.mode === "update") {
      _content = <UpdateContent onSubmitComponent={function (_title, _desc) {
        this.max_content_id++;
        this.setState({
          content: this.state.content.concat({ id: this.max_content_id, title: _title, desc: _desc })
        })
      }.bind(this)} />
    } else if (this.state.mode === "delete") {
      _content = <ReadContent title="Delete Mode" desc="delete something" />
    } else {
      _content = <ReadContent title={this.state.welcome.title} desc={this.state.welcome.desc} />
    }
    return _content
  }

  render() {
    return (
      <div className="App">
        <Subject
          data={this.state.subject}
          onClickComponent={function () {
            // this.state.mode = "welcome"
            this.setState({ mode: "welcome" })
          }.bind(this)}>
        </Subject>
        <TOC
          data={this.state.content}
          onClickComponent={function (data_id) {
            this.setState({ mode: "read", selected_content_id: data_id })
          }.bind(this)}>
        </TOC>
        <Control
          onClickComponent={function (selected_mode) {
            this.setState({ mode: selected_mode })
          }.bind(this)}>
        </Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;