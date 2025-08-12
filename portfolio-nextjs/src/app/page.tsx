import { Me, Navbar, Footer } from '../components';

export default function Home() {
  return (
    <div className="App">
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Me />
      </main>
      <Footer />
    </div>
  );
}
