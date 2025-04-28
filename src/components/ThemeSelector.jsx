const themes = [
    { value: 'career', label: 'Career Growth' },
    { value: 'love', label: 'Love and Relationships' },
    { value: 'emotions', label: 'Emotional Growth' },
  ];
  
  function ThemeSelector({ theme, setTheme }) {
    return (
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="">Select Focus Theme (optional)</option>
        {themes.map((t) => (
          <option key={t.value} value={t.value}>{t.label}</option>
        ))}
      </select>
    );
  }
  
  export default ThemeSelector;

  