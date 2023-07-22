import React from 'react'
import {Blog, Footer, Header, Menu} from './containers';
import {Navbar} from './components';
import './App.css'

const App = () => {
  return (
    <div >
        <Navbar/>
        <Header/>
        <Menu/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App