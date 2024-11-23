import React from 'react';
import Header from './Header';
import About from './About';
import Technologies from './Technologies';
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Technologies />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default App;