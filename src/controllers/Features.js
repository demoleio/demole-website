import React, { useState, useRef, useEffect } from "react";
import img1 from '../assets/img/bn6.jpg'
import img8 from '../assets/img/Method Draw Image (1).jpg'
import img7 from '../assets/img/bn12.jpg'
import img9 from '../assets/img/Method Draw Image (4).jpg'
import img10 from '../assets/img/Method Draw Image (7).jpg'

import img4 from '../assets/img/bn9.jpg'
import img5 from '../assets/img/bn10.jpg'
import img6 from '../assets/img/bn11.jpg'

import $ from 'jquery'

export default function Features() {
    const [data] = useState([
        {
            img: img1,
        },
        {
            img: img8,
        },
        {
            img: img7,
        },
        {
            img: img9,
        },
        {
            img: img10,
        }
    ])

    const [dataa] = useState([
        {
            img: img5,
            content: {
                title: 'Play it your way',
                des: 'Immerse yourself in an engaging world of monsters with endless content and quests to explore. OR Just spend 10 minutes a day to prepare your squad and your monsters will battle for you automatically.'
            }
        },
        {
            img: img6,
            content: {
                title: 'Interact with players around the world',
                des: 'Collaborate with global players to defeat world bosses or compete with them on leaderboards. Make friends worldwide through Friends and Guild features'
            }
        },
        {
            img: img4,
            content: {
                title: 'Create and trade your own NFT',
                des: 'Powered by blockchain technology, your monsters and items are unique and tradable in the marketplace.'
            }
        },
    ])

    const selectedIndex = useRef(0)
    const [index, setindex] = useState(0)
    const interval = useRef(null)

    const handleScroll = () => {
        const pageFeatures = document.querySelector("#features")
        $('#features .container .wraper-content .wraper-child div span').addClass('text-move-top')

        if (pageFeatures.getBoundingClientRect().top > 0) {
            $('#features .container .wraper-content .wraper-child div span').removeClass('text-move-top')
        }
        //BOTTOM
        if (pageFeatures.getBoundingClientRect().bottom <= 0) {
            $('#features .container .wraper-content .wraper-child div span').removeClass('text-move-top')
        }
    }

    useEffect(() => {
        interval.current = setInterval(() => {
            selectedIndex.current = selectedIndex.current === data.length - 1 ? 0 : selectedIndex.current + 1;
            setindex(selectedIndex.current)
        }, 3000)

        window.addEventListener('scroll', handleScroll);

        return () => {
            if (interval.current) clearInterval(interval.current)

            window.removeEventListener('scroll', handleScroll);
            $('#features .container .wraper-content .wraper-child div span').removeClass('text-move-top')
        }
    }, [data]);

    const onClickHinhTron = (indexx) => {
        if (interval.current) clearInterval(interval.current)
        selectedIndex.current = indexx;
        setindex(selectedIndex.current)
    }

    const renderData = () => {
        return (
            <div className="wraper-cover">
                <div className="slider-card">
                    <div className="txt">
                        <p>Fully Playable 3D Animation</p>
                        <span>Enjoy amazing monster design and dazzling skill animations in battle!</span>
                    </div>
                    <img className="imgg" src={data[index].img} alt="photos"></img>
                </div>

                <div className="wraper-hinhtron">
                    {data.map((value, key) => {
                        return (
                            <div key={key} className={`hinhtron ${index === key ? 'selectedd' : ''}`} onClick={() => onClickHinhTron(key)}>
                            </div>
                        )
                    })}
                </div>


            </div>

        )
    }

    const renderChild = (value, index) => {
        if (index % 2 === 0) {
            return (
                <div className="wraper-child" key={index}>
                    <img src={value.img} alt="photos"></img>

                    <div>
                        <p>{value.content.title}</p>
                        <span>{value.content.des}</span>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="wraper-child" key={index}>
                    <div>
                        <p>{value.content.title}</p>
                        <span>{value.content.des}</span>
                    </div>

                    <img src={value.img} alt="photos"></img>
                </div>
            )
        }

    }

    const renderDataa = () => {
        return (
            <div className="wraper-content">
                {dataa.map((value, index) => {
                    return renderChild(value, index)
                })}
            </div>
        )
    }

    return (
        <div id="features">
            <div className="container">
                <div className="waper-title">
                    <p className="title">Game Features</p>
                    <p className="big-title">Game Features</p>
                </div>

                {renderData()}

                {renderDataa()}

                {/* <div className="content">
                    <p className="upcase">{data[selectedIndex.current].content.title}</p>
                    <p>{data[selectedIndex.current].content.des}</p>


                </div> */}
            </div>

        </div>

    )
}
