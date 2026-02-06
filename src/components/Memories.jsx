import './Memories.css'
import memory1 from '../../funny video.jpeg'
import memory2 from '../../angry cute Cat.jpeg'
import memory3 from '../../Bombastic Side Eye 👀.jpeg'
import memory4 from '../../the description says cat.jpeg'

function Memories() {
  const reasons = [
    {
      image: memory1,
      title: "Your Laugh",
      text: "The way you laugh at my jokes, even the terrible ones 😄"
    },
    {
      image: memory2,
      title: "Your Smile",
      text: "How your smile brightens even my darkest days 💙"
    },
    {
      image: memory3,
      title: "Your Eyes",
      text: "The way you look at me like I'm your whole world ✨"
    },
    {
      image: memory4,
      title: "Just You",
      text: "Everything about you makes my heart skip a beat 💫"
    }
  ]

  return (
    <section className="memories section">
      <div className="memories-container">
        <h2 className="memories-title">Why You're Special to Me 💙</h2>
        <p className="memories-intro">
          Every moment with you is a treasure I hold close to my heart
        </p>
        
        <div className="memories-grid">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="memory-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="memory-image-wrapper">
                <img 
                  src={reason.image} 
                  alt={reason.title}
                  className="memory-image"
                />
                <div className="memory-overlay"></div>
              </div>
              <div className="memory-content">
                <h3 className="memory-title">{reason.title}</h3>
                <p className="memory-text">{reason.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Memories