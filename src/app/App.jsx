
import React,{ Component} from 'react';
import Header from './Header.jsx';
import logo from './images/logo.svg'
import imgHero from './images/desktop/image-hero.jpg';
import imgHeroMobil from './images/mobile/image-hero.jpg';

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

class App extends Component{
    render(){
        return(
        <body>
        <header>
        <div className='header__background'></div>
        <Header />
        <img src={imgHeroMobil} 
            className='imgHeroMobil'
        />
        <img src={logo} 
            className='logo'
        />
        <img src={imgHero} 
            className='imgHero'
        />
<div className='header__text'>IMMERSIVE EXPERIENCES THAT DELIVER</div>
          
            </header>
            <main>
            <section className="cont" >
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
            <h2>OUR CREATIONS</h2>
            <button> <b> SEE ALL </b></button>
          </div>
          <div className="images_main">
          <div className="cont__img" >
          
            <img src={imgMain1} className="imgMain1" />
            <h3 className="img_title1">DEEP EARTH</h3></div>
            <div className="cont__img" >
          
            <img src={imgMain2} className="imgMain1" />
            <h3 className="img_title1">NIGHT ARCADE </h3></div>
            <div className="cont__img" >
          
          <img src={imgMain3} className="imgMain1" />
          <h3 className="img_title1">SOCCER TEAM VR</h3></div><div className="cont__img" >
          
          <img src={imgMain4} className="imgMain1" />
          <h3 className="img_title1">THE GRID</h3></div><div className="cont__img" >
          
          <img src={imgMain5} className="imgMain1" />
          <h3 className="img_title1">FROM UP ABOVE VR</h3></div><div className="cont__img" >
          
          <img src={imgMain6} className="imgMain1" />
          <h3 className="img_title1">POCKET BOREALIS</h3></div><div className="cont__img" >
          
          <img src={imgMain7} className="imgMain1" />
          <h3 className="img_title1">THE CURIOSITY</h3></div><div className="cont__img" >
          
          <img src={imgMain8} className="imgMain1" />
          <h3 className="img_title1">MAKE IT FISHEYE</h3></div><div className="cont__img" >
          
          </div>
          </div>
       
          <h3 className="img_title2">NIGHT ARCADE</h3>
          <h3 className="img_title3">SOCCER TEAM VR</h3>
          <h3 className="img_title4">THE GRID</h3>
          <h3 className="img_title5">FROM UP ABOVE VR</h3>
          <h3 className="img_title6">POCKET BOREALIS</h3>
          <h3 className="img_title7">THE CURIOSITY</h3>
          <h3 className="img_title8">MAKE IT FISHEYE</h3>
        </section>
        </main>
            </body>
            
        )}}
        export default App;




