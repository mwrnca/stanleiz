import { useState } from 'react'
import './App.css'
import Nav from "./components/Nav"
import Main from "./components/Main"
import ProductGrid from './components/ProductGrid'
import About from "./components/About"


function App() {
  return (
    <section className='components-container'>
      <div className='nav-app'>
        <Nav />
      </div>
      <div className='scroll-container'>
        <Main />
        <About />
        <ProductGrid />
      </div>
    </section>
  )
}

export default App