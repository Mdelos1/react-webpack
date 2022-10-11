import React,{Component} from "react";
import close from '../app/images/icon-hamburger.svg'
import closeB from '../app/images/icon-close.svg'
class Header extends Component{
    listOptions = [
        "About", "Careers", "Events", "Products", "Support"
    ]
    listOptionsM = [
        "ABOUT", "CAREERS", "EVENTS", "PRODUCTS", "SUPPORT"
    ]
    render(){{

    }
       return(
        <nav className="header"><ul className="header__nav" >
             {
                    this.listOptions.map((element, index) => (
                       <div className="header__border"> <li  className="header__list"> {element} </li>
                     </div> 
                    ) )
                }
                </ul>
                <div className=" hidden" id="burgerlist">
                <ul ul className="header__navH">
                {
                    this.listOptionsM.map((element, index) => (
                        <li className="header__listH"> {element} </li>
                     
                    ) )
                }
                </ul></div> <div>   <img src={close} 
            className='burger ' id="burger"
        /><img src={closeB} 
            className='closeB hidden' id="closeB"
        />
        </div> </nav>
      
    )}}
    export default Header;