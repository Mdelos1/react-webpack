import React,{Component} from "react";
class Test extends Component{
    listOptions = [
        "About", "Careers", "Events", "Products", "Support"
    ]
    render(){
       return(
        <nav className="header"><ul className="header__nav">
             {
                    this.listOptions.map((element, index) => (
                        <li key={index} > {element} </li>
                    ))
                }
        </ul></nav>
      
    )}}
    export default Test;