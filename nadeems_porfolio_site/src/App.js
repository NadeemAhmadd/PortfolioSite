import './App.css';
import Backround from './components/backround';
import './components/aurora.css'
import './components/typing.css'
import { useEffect, useRef } from 'react';


function App() {

  return (
    <div class="content fade-in">
    <section> 

    <h1  class="title  cursor typewriter-animation">Hello, My name is Nadeem.
        <div class="aurora">
        <div class="aurora__item"></div>
        <div class="aurora__item"></div>
        <div class="aurora__item"></div>
        <div class="aurora__item"></div>


        </div>

    </h1>
    <p class="cursor typewriter-animation"style={ {fontSize: '16px', animationDelay: '6s'}}>Welcome to my portfolio site.</p>
    </section>
    <Backround/>
    </div>
   
  );
}

export default App;
