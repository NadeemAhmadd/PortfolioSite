import './App.css';
import Backround from './components/backround';
import './components/aurora.css'
import './components/typing.css'
import { useRef } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop.js";
import TopPageButton from './components/top_page_button';


function App() {
  const services = useRef(null);
  const blog = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };


  return (
    
    <div class="content fade-in">
    <Backround/>

    <section id="titlepage"> 

    <h1  class="title  cursor typewriter-animation">Hello, My name is Nadeem.
        <div class="aurora">
        <div class="aurora__item"></div>
        <div class="aurora__item"></div>
        <div class="aurora__item"></div>
        <div class="aurora__item"></div>


        </div>

    </h1>
    <p class="cursor typewriter-animation"style={ {fontSize: '16px', animationDelay: '6s'}}>Welcome to my portfolio site.</p>
    <TopPageButton  onClick={() => document.getElementById('aboutme').scrollIntoView({ behavior: 'smooth' })}/>
   
    </section>
    <section id='aboutme'>
    <h1>testing</h1>
    </section>


    
    </div>

  );
  
}

export default App;
