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
import Content from './components/Content';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: {title: "WEB", sub: "World Wide Web"},
      content: [
        {id: 1, title: "HTML", desc: "HTML is for information"},
        {id: 2, title: "CSS", desc: "CSS is for design"},
        {id: 3, title: "JavaScript", desc: "JavaScript is for interactive"},
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Subject data={this.state.subject} />
        <TOC data={this.state.content}/>
        <Content title={this.state.content[2].title} desc={this.state.content[2].desc} />
      </div>
    );
  }
}

export default App;