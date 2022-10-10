import React,{ Component} from 'react';
import Header from './Header.jsx';
import logo from './images/logo.svg'
import imgHero from './images/desktop/image-hero.jpg'

class App extends Component{
    render(){
        return(
        
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
            
        )
    }
}
export default App;