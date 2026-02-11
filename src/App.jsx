import { useState } from 'react'
import Hero from './components/Hero'
import Memories from './components/Memories'
import Proposal from './components/Proposal'
import SuccessScreen from './components/SuccessScreen'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleYesClick = () => {
    setShowSuccess(true)
  }

  if (showSuccess) {
    return <SuccessScreen />
  }

  return (
    <div className="app">
      <Hero />
      <Memories />
      <Proposal onYesClick={handleYesClick} />
      <Footer />
    </div>
  )
}

export default App
