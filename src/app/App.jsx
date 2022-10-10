import React,{ Component} from 'react';
import Header from './Header.jsx';
import logo from './images/logo.svg'
import imgHero from './images/desktop/image-hero.jpg'
import Footer from './Footer.jsx';


class App extends Component{
    render(){
        return(
        
        <body>
            <header>
        <Header />
        <img src={logo} 
            className='logo'
        />
        <img src={imgHero} 
            className='imgHero'
        />

            <h1>Hola Mund</h1>
            <section>
                <p>Lorem</p>
            </section>
            </header>
            
            <footer>
                <Footer />
                
            </footer>
            </body>
        )
    }
}
export default App;