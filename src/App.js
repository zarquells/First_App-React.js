import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello
          My name is Erica Lelis and i am 17 years old.
          <br></br>
          It's a pleasure to know you!

        </p>
        <a
          className="App-link"
          href="https://github.com/zarquells"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Account
        </a>
      </header>
    </div>
  );
}

export default App;
