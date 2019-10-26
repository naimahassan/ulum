import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
        <div id="three-column" className="container">
	<div id="tbox1">
		<div className="title">
			<h2>Maecenas luctus</h2>
		</div>
		<p>Nullam non wisi a sem semper eleifend. Donec mattis libero eget urna. Duis pretium velit ac suscipit mauris. Proin interdum.</p>
		<a href="#" className="button">Learn More</a> </div>
	<div id="tbox2">
		<div className="title">
			<h2>Integer gravida</h2>
		</div>
		<p>Proin eu wisi suscipit nulla suscipit interdum. Nullam non wisi a sem semper suscipit eleifend. Donec mattis libero eget urna.</p>
		<a href="#" className="button">Learn More</a> </div>
	<div id="tbox3">
		<div className="title">
			<h2>Praesent mauris</h2>
		</div>
		<p>Donec mattis libero eget urna. Proin eu wisi suscipit nulla suscipit interdum. Nullam non wisi a sem suscipit semper eleifend.</p>
		<a href="#" className="button">Learn More</a> </div>
</div>
    )
  }
}

export default Home