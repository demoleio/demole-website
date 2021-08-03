import React from 'react'

import TweetIcon from '../assets/img/Group.png'
import IconFb from '../assets/img/Group 8105.png'
import IconIg from '../assets/img/Group 8107.png'
import IconReddit from '../assets/img/reddit.png'
import IconDiscord from '../assets/img/discord.png'
import IconTele from '../assets/img/telegram.png'
import { Link } from "react-router-dom";

export default function Fooder() {
    return (
        <div id="fooder">
            <div className="container is-web">
                {/* <img src={Img} alt="photos"></img> */}
                <div className="cop-header">
                    {/* <p className="title">FAQ</p> */}
                    {/* <p>Summon</p>
                    <p>Marketplace</p>
                    <p>Stake</p>
                    <p>Pitch Deck</p>
                    <p>Demole-Wiki</p>
                    <p>Stake</p> */}


                    <Link to="/summon">Summon</Link>

                    <li className="tip">Marketplace<span>Coming Soon</span></li>
                    <li className="tip">Stake<span>Coming Soon</span></li>
                    <li>
                        <a href="/Demole_PitchDeck.pdf" target="_blank" rel="noopener noreferrer">Pitch Deck</a>
                    </li>
                    <li className="tip">Demole-Wiki<span>Coming Soon</span></li>
                </div>

                <div>
                    <p className="title">CONTACT</p>
                    <div>
                        <p>
                            <a href='https://www.instagram.com/demole.io' target="_blank" rel="noreferrer">
                                <img src={IconIg} alt="photos"></img>
                            </a>
                        </p>

                        <p>
                            <a href='https://www.facebook.com/Demoleio-701276920706670' target="_blank" rel="noreferrer">
                                <img src={IconFb} alt="photos"></img>
                            </a>
                        </p>


                        <p>
                            <a href='https://twitter.com/io_demole' target="_blank" rel="noreferrer">
                                <img src={TweetIcon} alt="photos"></img>
                            </a>
                        </p>

                        <p>
                            <a href='https://www.reddit.com/user/Demole_io' target="_blank" rel="noreferrer">
                                <img src={IconReddit} alt="photos"></img>
                            </a>
                        </p>

                        <p>
                            <a href='https://discord.com/channels/870208368743153725/870208369347153971' target="_blank" rel="noreferrer">
                                <img src={IconDiscord} alt="photos"></img>
                            </a>
                        </p>

                        <p>
                            <a href='https://t.me/demole_io' target="_blank" rel="noreferrer">
                                <img src={IconTele} alt="photos"></img>
                            </a>
                        </p>

                        <p>
                            <a href='https://t.me/Demole_ioCommunity' target="_blank" rel="noreferrer">
                                <img src={IconTele} alt="photos"></img>
                            </a>
                        </p>
                    </div>
                    <p>Email: business@demole.io</p>
                </div>


            </div>

            <div className="container is-mobie">
                <div className="title">
                    {/* <p>ABOUT</p> */}
                    <p>CONTACT US</p>
                    {/* <p>FOLLOW US</p> */}
                </div>


                <div className="group1">
                    <p>
                        <a href='https://www.instagram.com/demole.io' target="_blank" rel="noreferrer">
                            <img src={IconIg} alt="photos"></img>
                        </a>
                    </p>

                    <p>
                        <a href='https://www.facebook.com/Demoleio-701276920706670' target="_blank" rel="noreferrer">
                            <img src={IconFb} alt="photos"></img>
                        </a>
                    </p>


                    <p>
                        <a href='https://twitter.com/io_demole' target="_blank" rel="noreferrer">
                            <img src={TweetIcon} alt="photos"></img>
                        </a>
                    </p>

                    <p>
                        <a href='https://www.reddit.com/user/Demole_io' target="_blank" rel="noreferrer">
                            <img src={IconReddit} alt="photos"></img>
                        </a>
                    </p>

                    <p>
                        <a href='https://discord.com/channels/870208368743153725/870208369347153971' target="_blank" rel="noreferrer">
                            <img src={IconDiscord} alt="photos"></img>
                        </a>
                    </p>

                    <p>
                        <a href='https://t.me/demole_io' target="_blank" rel="noreferrer">
                            <img src={IconTele} alt="photos"></img>
                        </a>
                    </p>

                    <p>
                        <a href='https://t.me/Demole_ioCommunity' target="_blank" rel="noreferrer">
                            <img src={IconTele} alt="photos"></img>
                        </a>
                    </p>
                </div>

                <div className="line"></div>

                <p className="txt">Copyright © 2021 Laaqiq. <br></br> All Rights Reserved.</p>

                <div className="group2">
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                </div>

            </div>

        </div>
    )
}
