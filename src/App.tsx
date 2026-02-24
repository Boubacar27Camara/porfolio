import { useEffect, useState } from "react"
import AOS from 'aos';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {

  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
    document.documentElement.classList.add('dark');

  }, []);

  useEffect(() => {
    AOS.refresh()
  },[darkMode])

  const toggleDarkMode = () =>{
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  }

  return (
    <div className={
      darkMode
      ? 'bg-gradient-to-br from-gray-900 via-[#1e3a8a] to-gray-900 min-h-screen'
      : 'bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen'
    }>
     <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
     <Hero darkMode={darkMode}  />
     <About darkMode={darkMode} />
     <Skills darkMode={darkMode} />
     <Projects darkMode={darkMode} />
     <Contact darkMode={darkMode} />
     <Footer darkMode={darkMode} />
    </div>
  )
}

export default App
