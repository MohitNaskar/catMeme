import './Hero.css'
import heroImage from '../../Cat.jpeg'

function Hero() {
  return (
    <section className="hero section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hey love, I have something special to ask you 💙
          </h1>
          <p className="hero-subtitle">
            You make every moment feel like magic, and I can't imagine my world without your smile.
            This Valentine's Day, I want to beat you.
          </p>
        </div>
        <div className="hero-image-container">
          <img 
            src={heroImage} 
            alt="Our special moment" 
            className="hero-image"
          />
          <div className="image-glow"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero