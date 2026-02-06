import { useState } from 'react'
import './Proposal.css'

function Proposal({ onYesClick }) {
  const [noClickCount, setNoClickCount] = useState(0)
  const [noButtonStyle, setNoButtonStyle] = useState({})
  const [yesButtonSize, setYesButtonSize] = useState(1)

  const noReasons = [
    "Because every moment with you feels like a dream 💙",
    "Because saying yes comes with unlimited hugs and cuddles 😌",
    "Because the world is brighter when we're together 💫",
    "Because I spent hours making this just for you 👀",
    "Because you make my heart race every single time ✨",
    "Because I promise to make you laugh until your cheeks hurt 😊",
    "Because we fit together like puzzle pieces 🌟",
    "Because saying no would absolutely break my heart 💔",
    "Come on, you know deep down you want to say yes 🥺",
    "Please? Pretty please with all the cherries on top? 🍒",
    "Because Valentine's Day without you just wouldn't be the same 💝",
    "Because I want to create a million more memories with you 📸",
    "Because your smile is my favorite thing in the world 😍",
    "Because I can't imagine this day with anyone else 💕",
    "Because you deserve all the love and happiness 🎁",
    "Because together we make the perfect team 👫",
    "Because life's too short to say no to happiness 🌈",
    "Because I'm already planning the best date ever 🎉",
    "Because you're the reason I believe in love 💗",
    "Okay seriously, just click YES already! 😄"
  ]

  const handleNoClick = (e) => {
    e.preventDefault()
    
    const newCount = noClickCount + 1
    setNoClickCount(newCount)
    
    // Increase YES button size
    setYesButtonSize(prev => Math.min(prev + 0.15, 2.5))
    
    // Move NO button to random position within safe viewport bounds
    const buttonWidth = 180
    const buttonHeight = 80
    const padding = 30
    
    // Get actual viewport dimensions
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    
    // Calculate safe bounds
    const minX = padding
    const maxX = viewportWidth - buttonWidth - padding
    const minY = padding
    const maxY = viewportHeight - buttonHeight - padding
    
    // Generate random position within safe bounds
    const randomX = minX + Math.random() * Math.max(0, maxX - minX)
    const randomY = minY + Math.random() * Math.max(0, maxY - minY)
    
    setNoButtonStyle({
      position: 'fixed',
      left: `${Math.max(minX, Math.min(randomX, maxX))}px`,
      top: `${Math.max(minY, Math.min(randomY, maxY))}px`,
      transform: `scale(${Math.max(1 - newCount * 0.1, 0.4)})`,
      transition: 'all 0.3s ease',
    })
  }

  const currentReason = noReasons[Math.min(noClickCount, noReasons.length - 1)]

  return (
    <section className="proposal section">
      <div className="proposal-container">
        <h2 className="proposal-title">
          Will you be my Valentine? 💙
        </h2>
        
        {noClickCount > 0 && (
          <div className="reason-message">
            <p className="reason-text">{currentReason}</p>
          </div>
        )}
        
        <div className="buttons-container">
          <button
            className="yes-button"
            onClick={onYesClick}
            style={{
              transform: `scale(${yesButtonSize})`,
              animation: yesButtonSize > 1.5 ? 'bounce 0.5s infinite' : 'none'
            }}
          >
            YES! 💙
          </button>
          
          <button
            className="no-button"
            onClick={handleNoClick}
            style={noButtonStyle}
          >
            No
          </button>
        </div>
        
        {noClickCount >= 5 && (
          <p className="hint-text">
            The YES button is getting bigger... I think it wants you to click it! 😉
          </p>
        )}
      </div>
    </section>
  )
}

export default Proposal