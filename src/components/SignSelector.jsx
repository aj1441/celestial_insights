const signs = [
    'Aries', 'Taurus', 'Gemini', 'Cancer',
    'Leo', 'Virgo', 'Libra', 'Scorpio',
    'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];
  
  function SignSelector({ sign, setSign }) {
    return (
      <select value={sign} onChange={(e) => setSign(e.target.value)}>
        <option value="">Select Your Sign</option>
        {signs.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
    );
  }
  
  export default SignSelector;
  