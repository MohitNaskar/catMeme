import './FloatingHearts.css'

function FloatingHearts() {
  const hearts = ['💙', '💙', '✨', '💙', '✨', '💙', '💙', '✨']
  
  return (
    <div className="floating-hearts">
      {hearts.map((heart, index) => (
        <div
          key={index}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            fontSize: `${20 + Math.random() * 20}px`
          }}
        >
          {heart}
        </div>
      ))}
    </div>
  )
}

export default FloatingHearts