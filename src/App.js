import './App.css';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import Me from './Me'; // Import the Me component

function App() {
  return (
    <motion.div 
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          id="main-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Me />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </motion.div>
  );
}

export default App;
