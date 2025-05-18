import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Me from './Me'; // Import the Me component

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Me /> {/* Add the Me component */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
