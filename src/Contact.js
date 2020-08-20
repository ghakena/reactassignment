import React from 'react';

function Contact() {
    return (
        <div className="contact-div">
            <br/>
            <div className="container">
                <h1 className="contact">CONTACT US</h1>
                <form className="container">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    
                    <div class="form-group">
                        <label for="exampleFormControlTextarea3">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea3" rows="7"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <br />
            </div>
            
        </div>
    )
}

export default Contact;