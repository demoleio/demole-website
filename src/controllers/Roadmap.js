import React, { useState } from 'react'
import img1 from '../assets/img/Mask Group.jpg'
import img2 from '../assets/img/Mask Group1.jpg'
import img3 from '../assets/img/Mask Group2.jpg'
import img4 from '../assets/img/Mask Group3.jpg'

import img from '../assets/img/image3.png'
import Line from '../assets/img/Group 8092.png'
import LineMobile from '../assets/img/Group 8104.png'
export default function Roadmap() {
    const [data] = useState([
        {
            img: img1,
            title: "7/2021",
            content: [
                "Character design/ NFT system",
                "Monster system ( stat/skill/graphic v.v.. )",
            ],
            imgMobile: img

        },
        {
            img: img2,
            title: "8/2021",
            content: [
                "Monster summon",
                "Marketplace",
                "Training ground / Staking",
                "LP adding"
            ],
            imgMobile: img

        },
        {
            img: img3,
            title: "9/2021",
            content: [
                "World Boss",
                "Social features: Chatting, Line-up visiting",
                "Arena",
                "Mobile (Android/IOS)"
            ],
            imgMobile: img
        },
        {
            img: img4,
            title: "10/2021",
            content: [
                "Auction",
                "Monster upgrading system",
            ],
            imgMobile: img
        },
        {
            img: img2,
            title: "11/2021",
            content: [
                "Campaign/Story"
            ],
            imgMobile: img
        },
        {
            img: img4,
            title: "12/2021",
            content: [
                "Boosters"
            ],
            imgMobile: img
        },
        {
            img: img1,
            title: "QI/2022",
            content: [
                "Pet system",
                "More social features: Team up, Guild",
            ],
            imgMobile: img
        },
        {
            img: img3,
            title: "QII/2022",
            content: [
                "Item crafting system",
                "DAO Voting",
            ],
            imgMobile: img
        }
    ])

    const renderData = (value, index) => {
        return (
            <div className="child" key={index}>
                <div className="color"></div>
                <img src={value.img} alt="photos"></img>
                <div className="waper-txt">
                    <p className="titlee">{value.title}</p>
                    <ul>
                        {value.content.map((valuee, indexx) => {
                            return <li key={indexx}>{valuee}</li>
                        })}
                    </ul>

                </div>

            </div>
        )
    }

    const renderDataMobile = (value, index) => {
        return (
            <div className="child" style={{marginTop: `${index % 2 !== 0 ? 40  : 10}px`}} key={index}>
                <div className="color"></div>
                <div className="group1" style={{backgroundImage: `url(${value.imgMobile})`}}>
                    <p className="titlee">{value.title}</p>
                </div>
                <ul>
                    {value.content.map((valuee, indexx) => {
                        return <li key={indexx}>{valuee}</li>
                    })}
                </ul>

            </div>
        )
    }


    return (
        <div id="roadmap">
            <div className="container">
            <div className="waper-title">
                    <p className="title">Roadmap</p>
                    <p className="big-title">Roadmap</p>
                </div>
                <div className="content">
                    <img className="line" src={Line} alt="photos"></img>
                    <div className="waper-data">
                        {data.map((value, index) => {
                            return renderData(value, index)
                        })}
                    </div>
                </div>

                <div className="content-mobile">
                    <div className="waper-data">
                        {data.map((value, index) => {
                            return renderDataMobile(value, index)
                        })}
                    </div>
                    <img className="line" src={LineMobile} alt="photos"></img>
                </div>
            </div>

        </div>
    )
}
