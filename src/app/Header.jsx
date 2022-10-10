import React,{Component} from "react";
import close from '../app/images/icon-hamburger.svg'
class Test extends Component{
    listOptions = [
        "About", "Careers", "Events", "Products", "Support"
    ]
    render(){
       return(
        <nav className="header"><ul className="header__nav">
             {
                    this.listOptions.map((element, index) => (
                       <div className="header__border"> <li key={index} className="header__list"> {element} </li>
                     </div> 
                    ) )
                }
        </ul>  <div>   <img src={close} 
            className='burger'
        /></div> </nav>
      
    )}}
    export default Test;