import React from 'react';
import fenderGuitar from './images/fender-guitar-medium.jpg';
import party from './images/home cover.jpg';
import stage from './images/concert-setup.jpg';
import recording from './images/microphone.jpg';
import songwriting from './images/songwriting.jpg';
import rehearsal from './images/rehearsal.jpg';

function Services() {
    return (
        <div className="services-div">
            <h1 className="services-title">SERVICES OFFERED</h1>
            <div className="first-section">
                <div class="card-group">
                    <div class="card">
                        <img src={fenderGuitar} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Instruments for Hire</h5>
                            <p class="card-text">We rent out instruments to musicians, artistes, bands ors any legally registered party</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={party} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Public Address Systems for Hire</h5>
                            <p class="card-text">We have highly experienced disk-jockeys available to play music at your various functions.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={stage} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Concert Set-up Teams</h5>
                            <p class="card-text">We have a great team responsible for setting up venues for various concerts country-wide and provide the best services to ensure that the shows progress smoothly</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-section">
                <div class="card-group">
                    <div class="card">
                        <img src={recording} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Musical Recording</h5>
                            <p class="card-text">We have a very exciting team of musical producers ready to provide audio recording, mixing and mastering services to all clients.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={songwriting} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Song-writing</h5>
                            <p class="card-text">Our professional songwriters are eager to work with you to help you write your songs across all genres.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={rehearsal} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Rehearsal Space</h5>
                            <p class="card-text">We have studios nation-wide to provide rehearsal space for both local and international space</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Services;