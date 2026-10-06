import './App.css'
import Navbar from "./assets/components/navbar";
import Herosection from "./assets/components/herosection"
import About from './assets/components/about';
import Project from './assets/components/project';
import Contacts from './assets/components/contacts';
import Footer from './assets/components/footer';
import Skills from './assets/components/skill/skills';
const App = () => {
  return (
    <>
      <Navbar />
      <Herosection/>
      <About/>
      <Skills/>
      <Project/>
      <Contacts/>
      <Footer/>

    </>
  )
}

export default App