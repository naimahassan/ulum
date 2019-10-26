import React, { Component } from 'react'

class Contacts extends Component {
  render() {
    return (
        <div id="wrapper2">
	<div id="welcome" className="container">
		<div className="title">
			<h2>Welcome to our website</h2>
		</div>
		<p>This is <strong>Polychromasia</strong>, a free, fully standards-compliant CSS template designed by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>. The photos in this template are from <a href="http://fotogrph.com/"> Fotogrph</a>. This free template is released under the <a href="http://templated.co/license">Creative Commons Attribution</a> license, so you're pretty much free to do whatever you want with it (even use it commercially) provided you give us credit for it. Have fun :) </p>		
	</div>
	<div id="newsletter" className="container">
		<div className="title">
			<h2>Newsletter Signup</h2>
			<span className="byline">Integer sit amet pede vel arcu aliquet pretium</span> </div>
		<div className="content">
			<form method="post" action="#">
				<div className="row half">
					<div className="6u">
						<input type="text" className="text" name="name" placeholder="Name" />
					</div>
					<div className="6u">
						<input type="text" className="text" name="email" placeholder="Email" />
					</div>
				</div>
				<div className="row half">
					<div className="12u">
						<textarea name="message" placeholder="Message"></textarea>
					</div>
				</div>
				<div className="row">
					<div className="12u"> <a href="#" className="button">Send Message</a> </div>
				</div>
			</form>
		</div>
	</div>
</div>
    )
  }
}

export default Contacts