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
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "create",
      selected_content_id: 0,
      subject: { title: "WEB", sub: "World Wide Web" },
      welcome: { title: "Welcome", desc: "Hello, Welcome To Opentutorials React App!" },
      content: [
        { id: 0, title: "HTML", desc: "HTML is for information" },
        { id: 1, title: "CSS", desc: "CSS is for design" },
        { id: 2, title: "JavaScript", desc: "JavaScript is for interactive" },
      ]
    }
  }

  render() {
    var _title, _desc, _content = null
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
      _content = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === "read") {
      _title = this.state.content[this.state.selected_content_id].title
      _desc = this.state.content[this.state.selected_content_id].desc
      _content = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === "create") {
      _content = <CreateContent />
    } else if (this.state.mode === "update") {
      console.log("mode : update")
    } else if (this.state.mode === "delete") {
      console.log("mode : delete")
    }
    return (
      <div className="App">
        <Subject
          data={this.state.subject}
          onClickComponent={function () {
            // this.state.mode = "welcome"
            this.setState({ mode: "welcome" })
          }.bind(this)}></Subject>
        <TOC
          data={this.state.content}
          onClickComponent={function (data_id) {
            this.setState({ mode: "read", selected_content_id: data_id })
          }.bind(this)}></TOC>
        <Control
          onClickComponent={function (selected_mode) {
            this.setState({ mode: selected_mode })
          }.bind(this)}></Control>
        {_content}
      </div>
    );
  }
}

export default App;