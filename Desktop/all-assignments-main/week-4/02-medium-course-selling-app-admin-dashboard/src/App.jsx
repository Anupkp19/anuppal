import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import MainComponent from './components/maincomponent'

function App() {

  return (
    <>
      <Header />
      <MainComponent />      
    <Footer />
    </>
  )
}

export default App
