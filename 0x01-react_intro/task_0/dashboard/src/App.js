import logo from "./holberton-logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <p>School dashboard</p>
        </header>
      </div>
      <div className="App-body">
        <body>
          <p>Login to access the full dashboard</p>
        </body>
      </div>
      <div className="App-footer">
        <footer>
          <p>Copyright 2020 - holberton School</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
