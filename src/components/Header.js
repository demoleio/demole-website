import React, { useState } from "react";
import IconMobile from '../assets/img/icon-mobile.svg'
import IconClose from '../assets/img/icon-close.svg'
import Logo from '../assets/img/DEMOLE-logo02 1.png'
import Market from '../assets/img/map_grocery-or-supermarket.png'
import Stake from '../assets/img/ant-design_dollar-circle-filled.png'
import Summon from '../assets/img/raphael_opensource.png'
import Faq from '../assets/img/akar-icons_question-fill.png'
import Commun from '../assets/img/fluent_people-community-20-filled.png'
import { Link } from "react-router-dom";

import TweetIcon from '../assets/img/Group.png'
import IconFb from '../assets/img/Group 8105.png'
import IconIg from '../assets/img/Group 8107.png'
import IconReddit from '../assets/img/reddit.png'
import IconDiscord from '../assets/img/discord.png'
import IconTele from '../assets/img/telegram.png'

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const onClickToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    }


    return (
        <div className={`header`}>
            <div className="container">
                <img src={toggleMenu ? IconClose : IconMobile} className="icon-mobile" alt="photos" onClick={onClickToggleMenu}></img>
                {toggleMenu && <div className="ovelay-mobile"></div>}
                <Link to="/"><a className="waper-logo" href='/'>
                    <img src={Logo} alt="photos"></img>
                </a></Link>

                <div className="right">
                    <ul className={`menu ${toggleMenu ? 'is-toggle' : ''}`}>
                        {/* <Link to="/summon">{toggleMenu && <img src={Summon} alt="photos"></img>} Summon</Link>
                        <Link to="/marketplace">{toggleMenu && <img src={Market} alt="photos"></img>} Marketplace</Link> */}
                        <li title="Comming Soon"> {toggleMenu && <img src={Summon} alt="photos"></img>} Summon</li>
                        <li title="Comming Soon"> {toggleMenu && <img src={Market} alt="photos"></img>} Marketplace</li>
                        <li title="Comming Soon"> {toggleMenu && <img src={Stake} alt="photos"></img>} Stake</li>
                        <li title="Comming Soon"> {toggleMenu && <img src={Faq} alt="photos"></img>} Library</li>

                        {/* <Link to="/faq"><a href="/faq">{toggleMenu && <img src={Faq} alt="photos"></img>} FAQ</a></Link> */}
                        <li title="Comming Soon">{toggleMenu && <img src={Commun} alt="photos"></img>} PLAY NOW</li>

                        <div className="group1-mobile">
                            <p>
                                <a href='https://www.instagram.com/demole.io' target="_blank" without rel="noreferrer">
                                    <img src={IconIg} alt="photos"></img>
                                </a>
                            </p>

                            <p>
                                <a href='https://www.facebook.com/Demoleio-701276920706670' target="_blank" without rel="noreferrer">
                                    <img src={IconFb} alt="photos"></img>
                                </a>
                            </p>


                            <p>
                                <a href='https://twitter.com/io_demole' target="_blank" without rel="noreferrer">
                                    <img src={TweetIcon} alt="photos"></img>
                                </a>
                            </p>

                            <p>
                                <a href='https://www.reddit.com/user/Demole_io' target="_blank" without rel="noreferrer">
                                    <img src={IconReddit} alt="photos"></img>
                                </a>
                            </p>

                            <p>
                                <a href='https://discord.com/channels/870208368743153725/870208369347153971' target="_blank" without rel="noreferrer">
                                    <img src={IconDiscord} alt="photos"></img>
                                </a>
                            </p>

                            <p>
                                <a href='https://t.me/demole_io' target="_blank" without rel="noreferrer">
                                    <img src={IconTele} alt="photos"></img>
                                </a>
                            </p>

                            <p>
                                <a href='https://t.me/Demole_ioCommunity' target="_blank" without rel="noreferrer">
                                    <img src={IconTele} alt="photos"></img>
                                </a>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
