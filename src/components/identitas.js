import React from 'react';
import './Identitas.css'; // Jangan lupa import CSS

function Identitas() {
  return (
    <div className="identitas-container">
      
      {/* BINGKAI FOTO (opsional - bisa dihapus kalau gamau) */}
      <div className="identity-photo-frame">
          <img 
            src="/images/foto-nisrina.jpg" // Ganti dengan path foto aslimu
            alt="Nisrina" 
            className="horror-icon" 
          />
      </div>

      <h1 className="main-title">My Identity</h1>

      {/* SECTION 1: IDENTITAS */}
      <div className="identity-section">
        <p>
          My name is <span className="highlight">Nisrina Khalda Purwandi</span>, I'm 17 years old and currently studying at 
          <span className="highlight"> SMKN 1 Probolinggo</span>, majoring in <span className="highlight">Software Engineering 1 (RPL 1)</span>.
        </p>
        <div className="what-detail">What Detail →</div>
      </div>

      <div className="section-divider">---</div>

      {/* SECTION 2: JOURNEY ENGLISH */}
      <div className="identity-section">
        <h2 className="section-title">My Journey with English</h2>
        <p>
          My interest in English started when I was in elementary school. I used to see my friends speaking English so fluently that it inspired me to learn too. At first, I felt challenged — I didn't want to be left behind. Over time, I studied harder and eventually fell in love with the language itself.
        </p>
        <div className="what-detail">What Detail →</div>
      </div>

      <div className="section-divider">---</div>

      {/* SECTION 3: ACHIEVEMENTS */}
      <div className="identity-section">
        <h2 className="section-title">My Achievements</h2>
        <p>
          I have participated in several English competitions. I won medals and certificates at <span className="highlight">SMKN 2 Probolinggo</span>. I also joined competitions at <span className="highlight">Universitas Integral Hidayatullah</span> and <span className="highlight">Universitas Negeri Malang</span> — even though I didn't win, I reached the final round in both events.
        </p>
        <div className="what-detail">What Detail →</div>
      </div>

      {/* LINK PORTOFOLIO */}
      <div className="portfolio-link">
        <p>Link Portofolio:</p>
        <a href="https://nisrina-portofolio.vercel.app" target="_blank" rel="noopener noreferrer">
          https://nisrina-portofolio.vercel.app
        </a>
      </div>

    </div>
  );
}

export default Identitas;