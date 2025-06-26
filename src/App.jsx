import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import About from './components/About';

function App() {
  return (
    <div className='app'>
      <Header />
       <main className="main-content">
        <Intro />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App
