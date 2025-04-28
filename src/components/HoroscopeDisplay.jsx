function HoroscopeDisplay({ horoscope }) {
    return (
      <div className="horoscope-display">
        {horoscope && <p>{horoscope}</p>}
      </div>
    );
  }
  
  export default HoroscopeDisplay;
  