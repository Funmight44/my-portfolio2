
import Footer from './components/footer';
import Header from './components/header';
import Contact from './pages/contact';
import Home from './pages/home';
import Projects from './pages/projects';
import Services from './pages/services';
// import './index.css';
 import Skills from './pages/skills';

function App() {
  return (
  
    <div className="App">
      <Header/>
      <main>
        <Home/>
        <Skills/>
        <Services/>
        <Projects/>
        <Contact/>
      </main>
      
      <Footer/>
    </div>
  );
}

export default App;
