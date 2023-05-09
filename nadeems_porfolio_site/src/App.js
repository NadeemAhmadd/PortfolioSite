import "./App.css";
import Backround from "./components/backround";
import "./components/aurora.css";
import "./components/typing.css";
import { useRef } from "react";
import "./App.css";
import TopPageButton from "./components/top_page_button";
import MenuBar from "./components/MenuBar";
import PictureBox from "./components/PictureBox";
import AboutBar from "./components/AboutBar";
import Project_button from "./components/project_button";
import FooterBar from "./components/FooterBar";

function App() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <div class="content fade-in">
      <section className="section1 content" id="titlepage" ref={homeRef}>
        <Backround id="Canvas1" />

        <h1
          class="title  cursor typewriter-animation"
          style={{ marginTop: "350px" }}
        >
          Hello, My name is Nadeem.
          <div class="aurora">
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
          </div>
        </h1>
        <p
          class="cursor typewriter-animation"
          style={{ fontSize: "16px", animationDelay: "6s" }}
        >
          Welcome to my portfolio site.
        </p>
        <TopPageButton />
        <MenuBar
          aboutRef={aboutRef}
          homeRef={homeRef}
          projectRef={projectRef}
        />
      </section>
      <section className="section2" id="about" ref={aboutRef}>
        <AboutBar />

        <h3
          class="section2-heading about__heading"
          style={{ marginTop: "0px" }}
        >
          About
        </h3>
        <img
          src={require("./images/html.png")}
          style={{ marginRight: "700px", marginTop: "100px", width: "10%" }}
        />
        <p class="profile__blurb">
          I'm a computer science graduate with a deep passion for coding. I
          enjoy combining various elements, such as front and back-end
          development, with machine learning and other cutting-edge coding
          technologies to develop innovative projects. In addition, I engage in
          extensive research in the field of combinatorics, where I create
          algorithms to tackle complex big data problems. When I'm not at my
          computer I like to spend my time reading, going to the gym and
          traveling.
        </p>

        <div style={{ marginLeft: "700px", marginTop: "-375px" }}>
          <div class="picture-box-container">
            <PictureBox image={require("./images/keras.png")} />
            <PictureBox image={require("./images/python.png")} />
            <PictureBox image={require("./images/tensorFlow.png")} />
            <PictureBox image={require("./images/javaScript.png")} />
          </div>
          <div class="picture-box-container">
            <PictureBox image={require("./images/react.png")} />
            <PictureBox image={require("./images/java.png")} />
            <PictureBox image={require("./images/C.png")} />
          </div>
          <div class="picture-box-container">
            <PictureBox image={require("./images/kotlin.png")} />
            <PictureBox image={require("./images/aws.png")} />
            <PictureBox image={require("./images/git.png")} />
            <PictureBox image={require("./images/firebase.png")} />
          </div>
        </div>
      </section>

      <section  id="project" ref={projectRef}>
        <h3
          class="section2-heading project__heading"
          style={{ marginTop: "0px" }}
        >
          Projects
        </h3>

        <div className="check-shift">
          <div className="projectbox left-align-project">
            <div className="project-description-align">
              <h3 className="neuroclassify__heading">NeuroClassify</h3>
              <small className="project-description-align">
                Mri tumor detection and classification with deep learning.
                Built with Python, TensorFlow, Keras, sckit-learn and Matplotlib.
              </small>
              <img
                className="project_img"
                src={require("./gifs/testing.gif")}
                alt=""
                width="400"
                height="300"
                style={{ float: "right" }}
              />
              <Project_button/>
            </div>
          </div>


          <div className="projectbox left-align-project">
            <div className="project-description-align">
              <h3 className="heatwave__heading">HeatWave</h3>
              <small className="project-description-align">
              Remote temprerature controlled self-heating water
              bottle built with JavaScript, React.js, C and Arduino.
              </small>
              <img
                className="project_img"
                src={require("./gifs/testing.gif")}
                alt=""
                width="400"
                height="300"
                style={{ float: "right" }}
              />
              <Project_button/>
            </div>
          </div>


          <div className="projectbox left-align-project">
            <div className="project-description-align">
              <h3 className="laurier-chat__heading">Laurier Chat</h3>
              <small className="project-description-align">
              Machine learning chatbot, replacing the professors email
              built with, Python, TensorFlow, Kotlin, Java and Heroku.
              </small>
              <img
                className="project_img"
                src={require("./gifs/testing.gif")}
                alt=""
                width="400"
                height="300"
                style={{ float: "right" }}
              />
              <Project_button/>
            </div>
          </div>

          <div className="projectbox left-align-project">
            <div className="project-description-align">
              <h3 className="three-way-matching__heading">3-Way-Matching Research</h3>
              <small className="project-description-align">
              Research on advanced algorithms for Hadamard matrix of order 668,
              which has applications in the pharmaceutical and radar industry
              </small>
              <img
                className="project_img"
                src={require("./gifs/testing.gif")}
                alt=""
                width="400"
                height="300"
                style={{ float: "right" }}
              />
              <Project_button/>
            </div>
          </div>


        </div>

      </section>

     <section>
      <footer className="footer" >
        <div>Nadeem Ahmad ©2023</div>
      </footer>
      </section>
   

    </div>
  );
}
export default App;