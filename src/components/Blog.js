import React, { Component } from 'react'

class Blog extends Component {
  render() {
    return (
        <div id="wrapper3">
	<div id="portfolio" className="container">
		<div className="title">
			<h2>Design Portfolio</h2>
			<span className="byline">Integer sit amet pede vel arcu aliquet pretium</span> </div>
		<div className="column1">
			<div className="box"> <a href="#"><img src="images/img03.jpg" alt="" className="image image-full" /></a>
				<h3>Vestibulum venenatis</h3>
				<p>Fermentum nibh augue praesent a lacus at urna congue rutrum.</p>
			<a href="#" className="button">Learn More</a> </div>
		</div>
		<div className="column2">
			<div className="box"> <a href="#"><img src="images/img04.jpg" alt="" className="image image-full" /></a>
				<h3>Praesent scelerisque</h3>
				<p>Vivamus fermentum nibh in augue praesent urna congue rutrum.</p>
			<a href="#" className="button">Learn More</a> </div>
		</div>
		<div className="column3">
			<div className="box"> <a href="#"><img src="images/img05.jpg" alt="" className="image image-full" /></a>
				<h3>Donec dictum metus</h3>
				<p>Vivamus fermentum nibh in augue praesent urna congue rutrum.</p>
			<a href="#" className="button">Learn More</a> </div>
		</div>
		<div className="column4">
			<div className="box"> <a href="#"><img src="images/img06.jpg" alt="" className="image image-full" /></a>
				<h3>Mauris vulputate dolor</h3>
				<p>Rutrum fermentum nibh in augue praesent urna congue rutrum.</p>
			<a href="#" className="button">Learn More</a> </div>
		</div>
	</div>
</div>
    )
  }
}

export default Blog