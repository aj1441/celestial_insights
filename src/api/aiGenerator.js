const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export async function generateHoroscope(prompt) {
  try {
    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo', // free/cheap model for now
        messages: [
          { role: 'system', content: 'You are a wise cosmic astrologer who gives short, inspiring horoscopes.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 150,
      }),
    });

    const data = await response.json();
    if (data.error) {
      console.error('OpenAI API error:', data.error);
      return "Couldn't generate horoscope. Try again later.";
    }

    return data.choices[0].message.content.trim();
    
  } catch (error) {
    console.error('Horoscope AI fetch error:', error);
    return "Horoscope generation failed.";
  }

}
