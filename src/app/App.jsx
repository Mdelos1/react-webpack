import React,{ Component} from 'react';
import Header from './Header.jsx';
import logo from './images/logo.svg'
import imgHero from './images/desktop/image-hero.jpg'
import imgHeroMobil from './images/mobile/image-hero.jpg'

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
            </body>
            
        )
    }
}
export default App;