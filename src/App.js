import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Technologies from './Technologies';
import Projects from './Projects';
import ProjectList from './ProjectList';
import Blog from './Blog';
import Contact from './Contact';
import Timeline from './Timeline';
import './styles/App.css';
import { useGoogleAnalytics } from './hooks/useGoogleAnalytics';


function App() {
  useGoogleAnalytics();
  return (
    <Router basename="/ashley-portfolio">
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <About />
                <Timeline />
                <Technologies />
                <Projects />
                <Blog />
                <Contact />
              </>
            } />
            <Route path="/project-list" element={<ProjectList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;