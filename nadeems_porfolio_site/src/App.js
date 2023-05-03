import './App.css';
import Backround from './components/backround';
import './components/aurora.css'
import './components/typing.css'
import { useRef } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop.js";
import TopPageButton from './components/top_page_button';
import MenuBar from './components/MenuBar';


function App() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const homeRef = useRef(null);


  return (
    
    <div class="content fade-in">
    

    <section className='section1' id="titlepage" ref={homeRef} > 
    <Backround/>

    <h1  class="title  cursor typewriter-animation">Hello, My name is Nadeem.
        <div class="aurora">
        <div class="aurora__item"></div>
        <div class="aurora__item"></div>
        <div class="aurora__item"></div>
        <div class="aurora__item"></div>


        </div>

    </h1>
    <p class="cursor typewriter-animation"style={ {fontSize: '16px', animationDelay: '6s'}}>Welcome to my portfolio site.</p>
    <TopPageButton/>   
    <MenuBar
        aboutRef={aboutRef}
        homeRef={homeRef}
        projectRef={projectRef}
      />
    </section>
    <section id="about" ref={aboutRef}>

    <h1>testing</h1>
    </section>


    
    </div>

  );
  
}

export default App;
