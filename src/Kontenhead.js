import React from 'react'
import './Kontenhead.css'
import gambarhead from './work-desk__dustin-lee.jpg'
import logohead from './y-logo-white.png'

export default class Kontenhead extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <div className="gambar">
                    <img className="gbrhead" src={gambarhead} alt="gambar-head" />
                </div>
                <div className="logo">
                    <img src={logohead} alt="logo-head" />
                </div>
                <div className="heroshot">
                    <p className="p1">Hello! I'm Yastaqiim Muqorrobin</p>
                    <p className="p2">Consult, Design, and <span>Develop Websites</span></p>
                    <p className="p3">Have something great in mind? <span>Feel free to contact me.</span></p>
                    <p className="p3">I'll help you to make it happen.</p>
                </div>
                <div className="btnheroshot">
                    <button>LET'S MAKE CONTACT</button>
                </div>
            </div>
        )
    }
}