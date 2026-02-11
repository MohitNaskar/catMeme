import { useEffect } from "react";
import Confetti from "react-confetti";
import "./SuccessScreen.css";
import celebrationImage from "../../_.jpeg";
import Footer from "./Footer";

function SuccessScreen() {
  useEffect(() => {
    // Play success animation
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="success-screen">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={true}
        numberOfPieces={200}
        colors={[
          "#667eea",
          "#764ba2",
          "#4facfe",
          "#00f2fe",
          "#a8edea",
          "#fed6e3",
        ]}
      />

      <div className="success-content">
        <div className="success-hearts">
          <span className="success-heart heart-1">💙</span>
          <span className="success-heart heart-2">✨</span>
          <span className="success-heart heart-3">💙</span>
          <span className="success-heart heart-4">✨</span>
          <span className="success-heart heart-5">💙</span>
        </div>

        <h1 className="success-title">Yay! I knew you'd say yes! 💙✨</h1>

        <div className="success-image-container">
          <img
            src={celebrationImage}
            alt="Celebration"
            className="success-image"
          />
          <div className="success-glow"></div>
        </div>

        <p className="success-message">
          You've just made me the happiest person alive!
          <br />
          <br />
          I can't wait to spend Valentine's Day with you and create countless
          more beautiful memories together.
          <br />
          <br />
          Get ready for the best (virtual) date ever! 💫
        </p>

        <div className="success-date">
          <p className="date-text">Save the date:</p>
          <p className="date-highlight">February 14th, 2026 💙</p>
        </div>

        <div className="floating-hearts-success">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="floating-heart"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            >
              💙
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SuccessScreen;
