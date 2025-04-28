const BASE_URL = 'https://astrologer.p.rapidapi.com/api/v4/now';
const API_KEY = import.meta.env.VITE_ASTROLOGER_API_KEY;
const API_HOST = import.meta.env.VITE_ASTROLOGER_API_HOST;

export async function fetchAstrologyData(sign) {

      // 🛡️ Mock API response if you're in development mode
  if (import.meta.env.MODE === 'development') {
    console.log("Using fake astrology data for development.");
    return `Sun in Leo, Moon in Virgo, Mercury in Leo for ${sign}`;
  }
    // 🛡️ Production API call
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST
      },
      body: JSON.stringify({
        name: 'User',
        gender: 'm',
        birth_date: guessBirthdate(sign),
        birth_time: '12:00',
        birth_place: 'New York, NY'
      })
    });

    const data = await response.json();
    const summary = summarizeAstrologyData(data);
    return summary;

  } catch (error) {
    console.error('Astrology API fetch error:', error);
    throw error;
  }
}

// Helper: Guess a rough birthdate based on sign
function guessBirthdate(sign) {
  const signDates = {
    Aries: '1995-04-01',
    Taurus: '1995-05-01',
    Gemini: '1995-06-01',
    Cancer: '1995-07-01',
    Leo: '1995-08-01',
    Virgo: '1995-09-01',
    Libra: '1995-10-01',
    Scorpio: '1995-11-01',
    Sagittarius: '1995-12-01',
    Capricorn: '1995-01-01',
    Aquarius: '1995-02-01',
    Pisces: '1995-03-01'
  };
  return signDates[sign] || '1995-01-01';
}

// Helper: Summarize the astrology data
function summarizeAstrologyData(data) {
  if (!data || !data.planets) return 'Sun in unknown position.';

  const sun = data.planets.find(p => p.name === 'Sun');
  const moon = data.planets.find(p => p.name === 'Moon');
  const mercury = data.planets.find(p => p.name === 'Mercury');

  return `Sun is in ${sun?.sign}, Moon is in ${moon?.sign}, Mercury is in ${mercury?.sign}.`;
}
