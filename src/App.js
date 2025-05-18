import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer'; // Import the Footer component

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Add the Navbar component */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
}

export default App;
