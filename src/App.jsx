import { useState } from 'react';
import SignSelector from './components/SignSelector';
import HoroscopeDisplay from './components/HoroscopeDisplay.jsx';
import { fetchAstrologyData } from './api/astrologer';
import { generateHoroscope } from './api/aiGenerator';
import ThemeSelector from './components/ThemeSelector';
import Loader from './components/Loader';
import './styles/app.css';

function buildHoroscopePrompt(sign, astroSummary, theme) {
  let themeInstruction = '';

  if (theme === 'career') {
    themeInstruction = 'Focus on career growth, ambition, and leadership.';
  } else if (theme === 'love') {
    themeInstruction = 'Focus on love, relationships, and emotional connections.';
  } else if (theme === 'emotions') {
    themeInstruction = 'Focus on emotional healing, confidence, and personal growth.';
  }
  return `
    You are a wise cosmic astrologer writing a daily horoscope.

    Target Zodiac Sign: ${sign}

    Astrological Aspects Today: ${astroSummary}

    ${themeInstruction}

    Style: Inspirational, mystical, positive tone.

    Format:
    - 2 to 4 short sentences.
    - Mention general life themes (love, career, emotions, growth).
    - Avoid negativity or fear.

    Write the daily horoscope now:
  `;
}


function App() {
  const [sign, setSign] = useState('');
  const [horoscope, setHoroscope] = useState('');
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState('');


  const handleGenerateHoroscope = async () => {
    if (!sign) {
      alert('Please select a sign!');
      return;
    }
    setLoading(true);
    try {
      const astrologyData = await fetchAstrologyData(sign);
      const prompt = buildHoroscopePrompt(sign, astrologyData, theme);
      const aiHoroscope = await generateHoroscope(prompt);
      setHoroscope(aiHoroscope);
    } catch (error) {
      console.error('Error generating horoscope:', error);
      setHoroscope('Something went wrong. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <h1>AI Daily Horoscope</h1>
      <SignSelector sign={sign} setSign={setSign} />
      <ThemeSelector theme={theme} setTheme={setTheme} />
      <button onClick={handleGenerateHoroscope} disabled={loading}>
        {loading ? 'Loading...' : 'Get My Horoscope'}
      </button>
      {loading && <div style={{ marginTop: '1rem' }}><Loader /></div>}
      {/* <div className="horoscope-instructions">
        <p>✨ Select your sign and get a personalized horoscope! ✨</p>
        <p>Note: The horoscope is generated based on your astrological sign and some cosmic aspects.</p>
        <p>Feel free to share your experience with us!</p> */}

      <HoroscopeDisplay horoscope={horoscope} />
    </div>
  );
}

export default App;
