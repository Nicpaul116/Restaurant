import React from 'react'
import {Blog, Footer, Header, Menu, Contact} from './containers';
import {Navbar} from './components';
import './App.css'

const App = () => {
  return (
    <div >
        <Navbar/>
        <Header/>
        <Menu/>
        <Blog/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App