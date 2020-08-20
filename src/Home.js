import React from 'react';

// import image
import image1 from './images/rockstar.jpg';
import image2 from './images/microphone.jpg';
import image3 from './images/mic.jpg';

function Home() {
    return (
        <div className="home-div">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={image1} class="d-block w-100" alt="First-slide" />
                            <div class="carousel-caption d-none d-md-block">
                            <h1 className="welcome-message-1">Welcome to Muzikal Afrika Ent.</h1>
                            <h2 className="welcome-message-2">The Perfect Stop for all your Entertainment Needs</h2>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={image2} class="d-block w-100" alt="Second-slide" />
                            <div class="carousel-caption d-none d-md-block">
                            <h1 className="welcome-message-1">Welcome to Muzikal Afrika Ent.</h1>
                            <h2 className="welcome-message-2">The Perfect Stop for all your Entertainment Needs</h2>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={image3} class="d-block w-100" alt="Third-slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <h1 className="welcome-message-1">Welcome to Muzikal Afrika Ent.</h1>
                                <h2 className="welcome-message-2">The Perfect Stop for all your Entertainment Needs</h2>
                            </div>
                    </div>
                </div>
                    
                    
                </div>
        </div>
        
    )
}

export default Home;