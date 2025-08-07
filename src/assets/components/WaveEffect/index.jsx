// src/components/WaveEffect.jsx
import './index.css';

export default function WaveEffect() {
  return (
    <div className="wave-container">
      <svg
        className="wave-svg"
        viewBox="0 0 300 80"
        preserveAspectRatio="none"
      >
        <path 
          d="M0,40 Q75,20 150,40 T300,40" 
          stroke="#27ae60" 
          strokeWidth="3" 
          fill="none"
          className="animated-wave"
        />
        <path 
          d="M0,45 Q75,25 150,45 T300,45" 
          stroke="#27ae60" 
          strokeWidth="2" 
          fill="none"
          className="animated-wave-2"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
