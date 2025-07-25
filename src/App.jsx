import { useState } from 'react';

export default function App() {
  const [personality, setPersonality] = useState('');
  const [interests, setInterests] = useState([]);

  const allInterests = [
    'World News & Current Events',
    'Science & Technology',
    'AI, Machine Learning & Coding',
    'Business, Finance & Investing',
    'Politics & Social Issues',
    'Pop Culture & Celebrity Gossips',
    'Internet Trends & Memes',
    'Health, Wellness & Mindfulness',
    'Sports & Competitions',
    'Gaming & Esports',
    'Movies, TV Shows & Entertainment',
    'Space & Astronomy',
    'Books, Education & Self-Improvement',
    'Environment & Climate Change',
    'Music & Festivals',
    'Food & Cooking',
    'Travel & Adventure',
    'DIY, Crafting & Hobbies',
    'Cars, Motorsports & Tech',
    'Animals & Nature',
  ];

  const handleCheckbox = (val) => {
    setInterests((prev) =>
      prev.includes(val) ? prev.filter((i) => i !== val) : [...prev, val]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Personality: ${personality}\nInterests: ${interests.join(', ')}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}
    >
      <h2>Select Your Personality Type</h2>
      <select
        value={personality}
        onChange={(e) => setPersonality(e.target.value)}
        required
      >
        <option value="">--Choose one--</option>
        <option value="calm-observer">Calm Observer</option>
        <option value="chaos-magnet">Chaos Magnet</option>
        <option value="story-seeker">Story Seeker</option>
        <option value="analyst">Analyst</option>
      </select>

      <h3 style={{ marginTop: '2rem' }}>Choose Your Interests</h3>
      {allInterests.map((interest) => (
        <div key={interest}>
          <label>
            <input
              type="checkbox"
              value={interest}
              checked={interests.includes(interest)}
              onChange={() => handleCheckbox(interest)}
            />
            {interest}
          </label>
        </div>
      ))}

      <button type="submit" style={{ marginTop: '2rem' }}>
        Submit
      </button>
    </form>
  );
}