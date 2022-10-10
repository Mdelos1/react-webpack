import React, { Component } from "react";
import Header from "./Header.jsx";
import logo from "./images/logo.svg";
import imgHero from "./images/desktop/image-hero.jpg";
//IMAGENES MAIN
import imgMain from "./images/desktop/image-interactive.jpg";
import imgMain1 from "./images/desktop/image-deep-earth.jpg";
import imgMain2 from "./images/desktop/image-night-arcade.jpg";
import imgMain3 from "./images/desktop/image-soccer-team.jpg";
import imgMain4 from "./images/desktop/image-grid.jpg";
import imgMain5 from "./images/desktop/image-from-above.jpg";
import imgMain6 from "./images/desktop/image-pocket-borealis.jpg";
import imgMain7 from "./images/desktop/image-curiosity.jpg";
import imgMain8 from "./images/desktop/image-fisheye.jpg";

class App extends Component {
  render() {
    return (
      <header>
        <Header />
        <img src={logo} className="logo" />
        <img src={imgHero} className="imgHero" />
        <section>
          <img src={imgMain} className="imgMain" />
          <div className="top-main">
          <h1>THE LEADER IN <br></br>INTERACTIVE VR</h1>
            <span>
              Founded in 2011, loopstudios has been producing world-class
              <br></br> virtual reality projects for some of the best companies
              around the<br></br> globe. our award-winning creations have
              transformed<br></br> businesses through digital experiences that
              bind to their brand.
            </span>
          </div>
          <div className="main-button">
            <span>OUR CREATIONS</span>
            <button>SEE ALL</button>
          </div>
          <div className="images_main">
            <img src={imgMain1} className="imgMain1" />
            <img src={imgMain2} className="imgMain2" />
            <img src={imgMain3} className="imgMain3" />
            <img src={imgMain4} className="imgMain4" />
            <img src={imgMain5} className="imgMain5" />
            <img src={imgMain6} className="imgMain6" />
            <img src={imgMain7} className="imgMain7" />
            <img src={imgMain8} className="imgMain8" />
          </div>
          <span>DEEP EARTH</span>
        </section>
      </header>
    );
  }
}
export default App;
