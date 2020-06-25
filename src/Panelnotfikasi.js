import React, { useState } from 'react'
import './Panelnotifikasi.css';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

// note: fungsi panel ini -> jika d tekan tombol maka akan bergeser keatas
class Panelnotifikasi extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        };
    }

    geseratas() {
    }

    render() {
        return (
            <div className="Panelnotifikasi">
                <Container>
                    <div className="Panelnotifikasi-ket">
                        <p>By accessing and using this website, you acknowledge that you have read and understand our <span><a href="" className="Panelnotifikasi-link">Cookie Policy, Privacy Policy,</a></span> and out <span><a href="" className="Panelnotifikasi-link">Terms  of Service.</a></span></p>

                    </div>
                    <div className="Panelnotifikasi-button">
                        <Button id="btnScrollTop"
                            variant="primary"
                            onClick={() => this.geseratas()}>Got it
                        </Button>
                    </div>
                </Container>
            </div >
        )
    }
}

export default Panelnotifikasi