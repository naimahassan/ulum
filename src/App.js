import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Blog from './components/Blog'
import Contacts from './components/Contacts'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        {/* <Router> */}
          <Navbar/>
          <Home/>
          <Blog/>
          {/* <Contacts/> */}
          <Footer/>
          {/* <Route path='/' component={Main} /> */}
        {/* </Router> */}
      </div>
    )
  }
}

export default App