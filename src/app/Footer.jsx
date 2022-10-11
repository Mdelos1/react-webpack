import React, { Component } from "react";
import logo from './images/logo.svg'
import facebook from './images/icon-facebook.svg'
import twitter from './images/icon-twitter.svg'
import pinterest from './images/icon-pinterest.svg'
import instagram from './images/icon-instagram.svg'


class Test extends Component {
    listOptions = [
        "About", "Careers", "Events", "Products", "Support"
    ]
    render() {
        return (
            <footer>
                <nav className="footer">
                    <div className="footer__section">
                        <div>
                            <img src={logo}
                                className='footer__logo'
                            />
                        </div>
                        <div>
                            <ul className="footer__nav">
                                {
                                    this.listOptions.map((element, index) => (
                                        <li key={index} className='footer__list' > {element} </li>
                                    ))
                                }
                            </ul>
                        </div>

                    </div>
                    <div className="footer__section footer__finalSection">
                        <div className='footer__icons'>
                            <img src={facebook}
                                className='footer__img'
                            />
                            <img src={twitter}
                                className='footer__img'
                            />
                            <img src={pinterest}
                                className='footer__img'
                            />
                            <img src={instagram}
                                className='footer__img'
                            />
                        </div>
                        <div>
                            <p className='footer__text'>2021 Loopstudios. All rights reserved</p>
                        </div>
                    </div>
                </nav>
            </footer>

        )
    }
}
export default Test;