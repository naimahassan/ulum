import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
        <div id="three-column" className="container">
	<div id="tbox1">
		<div className="title">
			<h2>Madrasa</h2>
		</div>
		<p>From young to old people come to be taught about the dean.</p>
		<a href="#" className="button">Learn More</a> </div>
	<div id="tbox2">
		<div className="title">
			<h2>Maulid</h2>
		</div>
		<p>Maulid is the practice of remembering the prophet(S.A.W) through kaswida .</p>
		<a href="#" className="button">Learn More</a> </div>
	<div id="tbox3">
		<div className="title">
			<h2>Mosque</h2>
		</div>
		<p>At Ulumu there is omsque where people come and converge n pray to Allah(S.W.T)</p>
		<a href="#" className="button">Learn More</a> </div>
</div>
    )
  }
}

export default Home