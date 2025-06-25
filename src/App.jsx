import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';

function App() {
  return (
    <div className='app'>
      <Header />
       <main className="main-content">
        <Intro />
      </main>
      <Footer />
    </div>
  );
}

export default App
