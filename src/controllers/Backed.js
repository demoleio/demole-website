// import React, { useState } from 'react'
import React from 'react'
// import Bingbon from '../assets/img/bingbon1.png'
// import Bitcoin from '../assets/img/NoPath.png'
// import Okex from '../assets/img/OKEX1.png'
// import Directid from '../assets/img/directid-logo.png'
// import Drope from '../assets/img/dropel.png'
// import Ftx from '../assets/img/ftx.png'
// import Ccn from '../assets/img/NoPath - Copy (2).png'
// import Huobi from '../assets/img/组件.png'
// import Easypost from '../assets/img/easypost_logo.png'
// import Bibox from '../assets/img/Group 8090.png'
// import Binance from '../assets/img/NoPath - Copy (7).png'
// import Monero from '../assets/img/NoPath - Copy (9).png'

export default function Backed() {

    // const [data, setdata] = useState([
    //     { img: Bingbon },
    //     { img: Bitcoin },
    //     { img: Okex },
    //     { img: Directid },
    //     { img: Drope },
    //     { img: Ftx },
    //     { img: Ccn },
    //     { img: Huobi },
    //     { img: Easypost },
    //     { img: Bibox },
    //     { img: Binance },
    //     { img: Monero },
    // ])
    return (
        <div id="backed">
            <div className="container">
            <p className="title">BACKED BY</p>
                <div className="content">
                    {/* {data.map((value, index) => {
                        return <img src={value.img} alt="photos"></img>
                    })} */}
                </div>

                <div className="sketchfab-embed-wrapper">
                    <iframe title="Demole.io Model 1" frameBorder="0" allowFullScreen allow="fullscreen; autoplay; vr" xr-spatial-tracking="1" execution-while-out-of-viewport="1" execution-while-not-rendered="1" web-share="1" src="https://sketchfab.com/models/6732e15989d5429f9af50bcf01448f48/embed?autostart=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_theme=dark"> </iframe>
                </div>
            </div>
        </div>
    )
}
