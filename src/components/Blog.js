import React, { Component } from 'react'

class Blog extends Component {
  render() {
    return (
        <div id="wrapper3">
	<div id="portfolio" className="container">
		<div className="title">
			<h2>Madrasa staff</h2>
			<span className="byline">These are the people that help aroud the masjid</span> </div>
		<div className="column1">
			<div className="box"> <a href="#"><img src="images/mosque.jpg" alt="" className="image image-full" /></a>
				<h3>Maalim Jummah</h3>
				<p>He is the leader and co-founder of the Madrasa.</p>
			<a href="#" className="button">Learn More</a> </div>
		</div>
		<div className="column2">
			<div className="box"> <a href="#"><img src="images/mosque.jpg" alt="" className="image image-full" /></a>
				<h3>Maalim Maki</h3>
				<p>He is a ustandh at madrasatul-ulu alongside maalim Jummah.</p>
			<a href="#" className="button">Learn More</a> </div>
		</div>
		<div className="column3">
			<div className="box"> <a href="#"><img src="images/mosque.jpg" alt="" className="image image-full" /></a>
				<h3>Maalim Suleiman</h3>
				<p>He was a graduae from the madrasa and had volntered to teach.</p>
			<a href="#" className="button">Learn More</a> </div>
		</div>
		<div className="column4">
			<div className="box"> <a href="#"><img src="images/mosque.jpg" alt="" className="image image-full" /></a>
				<h3>Maalimat Jumwa</h3>
				<p>She is the ustadha at the madrasa telling young kids.</p>
			<a href="#" className="button">Learn More</a> </div>
		</div>
	</div>
</div>
    )
  }
}

export default Blog