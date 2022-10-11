
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



import imgMain1M from "./images/mobile/image-deep-earth.jpg";
import imgMain2M from "./images/mobile/image-night-arcade.jpg";
import imgMain3M from "./images/mobile/image-soccer-team.jpg";
import imgMain4M from "./images/mobile/image-grid.jpg";
import imgMain5M from "./images/mobile/image-from-above.jpg";
import imgMain6M from "./images/mobile/image-pocket-borealis.jpg";
import imgMain7M from "./images/mobile/image-curiosity.jpg";
import imgMain8M from "./images/mobile/image-fisheye.jpg";


import Footer from './Footer.jsx';



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
            <img src={imgMain1M} className="imgMain1M" />
            <h3 className="img_title1">DEEP EARTH</h3></div>
            <div className="cont__img" >
          
            <img src={imgMain2} className="imgMain1" />
            <img src={imgMain2M} className="imgMain1M" />
            <h3 className="img_title1">NIGHT ARCADE </h3></div>
            <div className="cont__img" >
          
          <img src={imgMain3} className="imgMain1" />
          <img src={imgMain3M} className="imgMain1M" />
          <h3 className="img_title1">SOCCER TEAM VR</h3></div><div className="cont__img" >
          
          <img src={imgMain4} className="imgMain1" />
          <img src={imgMain4M} className="imgMain1M" />
          <h3 className="img_title1">THE GRID</h3></div><div className="cont__img" >
          
          <img src={imgMain5} className="imgMain1" />
          <img src={imgMain5M} className="imgMain1M" />
          <h3 className="img_title1">FROM UP ABOVE VR</h3></div><div className="cont__img" >
          
          <img src={imgMain6} className="imgMain1" />
          <img src={imgMain6M} className="imgMain1M" />
          <h3 className="img_title1">POCKET BOREALIS</h3></div><div className="cont__img" >
          
          <img src={imgMain7} className="imgMain1" />
          <img src={imgMain7M} className="imgMain1M" />
          <h3 className="img_title1">THE CURIOSITY</h3></div><div className="cont__img" >
          
          <img src={imgMain8} className="imgMain1" />
          <img src={imgMain8M} className="imgMain1M" />
          <h3 className="img_title1">MAKE IT FISHEYE</h3></div>
          </div>
       
          
        </section>
        </main>
           
            

        
       





            <footer>
                <Footer />
                
            </footer>
            </body>
        )
    }
}
export default App;

