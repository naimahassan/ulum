import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
        <div id="header-wrapper">
	<div id="header" className="container">
		<div id="menu">
			<ul>
				<li className="current_page_item"><a href="#" accesskey="1" title="">Homepage</a></li>
				{/* <li><a href="#" accesskey="2" title="">Our Clients</a></li> */}
				<li><a href="#" accesskey="3" title="">About Us</a></li>
				{/* <li><a href="#" accesskey="4" title="">Careers</a></li> */}
				<li><a href="#" accesskey="5" title="">Contact Us</a></li>
			</ul>
		</div>
		<div id="logo">
			<h1><a href="#">Madrasatul Ulum</a></h1>
			{/* <span>Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a></span> */}
		</div>
	</div>
	<div id="banner" className="container">
		<div className="heading">
			{/* <h2>Integer sit amet pede aliquet pretium</h2>
			<p>Consectetuer adipiscing elit. Nam pede erat, porta eu, lobortis eget, tempus et, tellus. Etiam neque. Vivamus consequat lorem at nisl. Nullam non wisi a sem semper eleifend.</p>
			<a href="#" className="button">Learn More</a> */}
		</div>
	</div>

</div>
    )
  }
}

export default Navbar