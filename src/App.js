import React from 'react';
import Header from './Header';
import About from './About';
import Technologies from './Technologies';
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact';
import Timeline from './Timeline';
import './styles/App.css';
import { useGoogleAnalytics } from './hooks/useGoogleAnalytics';


function App() {
  useGoogleAnalytics();
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Timeline />
        <Technologies />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default App;