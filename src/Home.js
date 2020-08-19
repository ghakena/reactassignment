import React from 'react';

// import image
import image3 from './images/guitar 1.jpg';

function Home() {
    return (
        <div className="home-div">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={image3} class="d-block w-100" alt="" />
                            <div class="carousel-caption d-none d-md-block">
                                <h1 className="welcome-message">Welcome to Muzikal Afrika Ent.</h1>
                                <h3 className="welcome-message">YOUR HUB FOR ALL YOUR ENTERTAINMENT NEEDS</h3>
                            </div>
                    </div>
                        </div>
                        
                </div>
        </div>
        
    )
}

export default Home;