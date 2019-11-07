import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
        <div id="wrapper4">
        <div id="footer" className="container">
            <div>
                <header className="title">
                    <h2>Get in touch</h2>
                    <span className="byline">Welcome to reach out and learn more</span> </header>
                <ul className="contact">
                    <li><a href="#" className="icon icon-twitter"><span>Twitter</span></a></li>
                    <li><a href="#" className="icon icon-facebook"><span></span></a></li>
                    <li><a href="#" className="icon icon-dribbble"><span>Pinterest</span></a></li>
                    <li><a href="#" className="icon icon-tumblr"><span>Google+</span></a></li>
                    <li><a href="#" className="icon icon-rss"><span>Pinterest</span></a></li>
                </ul>
            </div>
        </div>
    </div>
    )
  }
}

export default Footer