import React from 'react';

function About() {
    return (
        <div className="about-div">
            <div className="bgn-img"></div>
            <div class="jumbotron">
                <h1 class="display-4">ABOUT US</h1>
                <p class="lead">
                    We are a multinational company that is heavily invested in the entertainment industry and we offer a couple of services including but not limited to 
                    renting out instruments, stage preparation for concerts, instrument sales, instrument maintenance, music production, among others.
                </p>
                <div class="lead">
                    At Muzikal Afrika, we seek to promote talent, a productive work ethic for artistes, quality in the producion of music, shows and many other platforms that actively involve
                    the musicians.
                </div>

                <hr class="my-4" />
                <p class="contact-text">Get in contact with us for any of our services above using these link below</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">CONTACT US</a>
            </div>
        </div>
    )
}

export default About;