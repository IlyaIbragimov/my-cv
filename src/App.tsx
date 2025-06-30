import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './components/Intro'
import About from './components/About'
import WorkExperience from './components/WorkExperience'

const App: React.FC = () => {
  return (
    <div className='app'>
      <Header />
      <main className="main-content">
        <Intro />
        <About />
        <WorkExperience />
      </main>
      <Footer />
    </div>
  )
}

export default App
