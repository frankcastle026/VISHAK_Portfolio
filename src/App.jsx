import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Nav';
import Intro from './Intro';
import About from './About';
import Event from './Event';
import Experience from './Experience';
import Me from './Me';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Nav />
      <Intro />
      <About />
      <Event />
      <Experience />
      <Me />
      <Contact />
    </div>
  );
}

export default App
