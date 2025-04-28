# ✨ AI Horoscope App

A dynamic horoscope generator built with **React**, **Vite**, and **OpenAI GPT-3.5 Turbo**.  
Users select their zodiac sign and an optional focus theme to receive a short, mystical horoscope generated live by AI.

---

## 🚀 Live Demo

[Coming Soon – Hosted on Netlify or Vercel]

---

## 📚 Features

- Select zodiac sign
- Choose daily focus (Career, Love, Emotional Growth)
- Real-time AI-powered horoscope generation
- Smooth loading animations
- Secure environment variable management

---

## 🛠 Tech Stack

- React
- Vite
- OpenAI GPT-3.5 Turbo (Chat Completions API)
- HTML5 / CSS3

---

## ⚡ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/horoscope-app.git
cd horoscope-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file**

```bash
VITE_OPENAI_API_KEY=your-openai-api-key-here
```

4. **Start the development server**

```bash
npm run dev
```

5. **Open in Browser**

Go to: `http://localhost:5173`

---

## 📂 Project Structure

```
src/
├── api/
│   ├── aiGenerator.js
│   └── astrologer.js
├── components/
│   ├── SignSelector.jsx
│   ├── ThemeSelector.jsx
│   ├── HoroscopeDisplay.jsx
│   └── Loader.jsx
├── styles/
│   └── app.css
├── App.jsx
├── main.jsx
.env
vite.config.js
index.html
```

---

## 📖 Project Log

📝 [View Full Project Build Log](./horoscope-app-project-log.md)

Detailed build journey: challenges, breakthroughs, and learnings.

---

## 🚀 Planned Enhancements

- Copy horoscope to clipboard
- Save favorite horoscopes
- Share horoscopes on Twitter/X
- Animated typing effects
- Deploy live to Netlify or Vercel

---

## 🤝 Acknowledgments

- [OpenAI](https://platform.openai.com/)
- Cosmic inspiration ✨

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

