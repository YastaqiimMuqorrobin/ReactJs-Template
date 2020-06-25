import React, { useState } from 'react'
import './Panelbawah.css'


export default class Panelbawah extends React.Component {

    state = {

    }

    tutup = () => {
        var hilang = document.getElementById('hilang');
        hilang.style.display = "none";
    }

    render() {
        return (
            <div className="panelbawah" id="hilang">
                <div className="close">
                    <button onClick={() => this.tutup()}>x</button>
                </div>
                <div>
                    <h5>Get latest updates in web technologies</h5>
                </div>
                <div>
                    <p>I write articles related to web technologies, such as design trends, development tools, UI/UX case studies and review, and more. Sign up to my newsletter to get them all.</p>
                </div>
                <div className="count">
                    <input type="input" placeholder="Email address" />
                    <button>Count me in</button>
                </div>
            </div>
        )
    }
}