import { useState } from 'react';
import './App.css';

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
    <div className="container">
      <form className="quiz-form" onSubmit={handleSubmit}>
        <h1>🧠 AI Personality Quiz</h1>
        <p className="desc">Let AI match you to the news that actually matters to you.</p>

        <label>Select Your Personality Type</label>
        <select
          value={personality}
          onChange={(e) => setPersonality(e.target.value)}
          required
        >
          <option value="">-- Choose one --</option>
          <option value="chaos-magnet">Chaos Magnet</option>
          <option value="story-seeker">Story Seeker</option>
          <option value="calm-observer">Calm Observer</option>
          <option value="Analyst">Analyst</option>
        </select>

        <h3 style={{ marginTop: '1.5rem' }}>Pick Your Interests</h3>
        <div className="checkbox-grid">
          {allInterests.map((interest) => (
            <label key={interest} className="checkbox">
              <input
                type="checkbox"
                value={interest}
                checked={interests.includes(interest)}
                onChange={() => handleCheckbox(interest)}
              />
              {interest}
            </label>
          ))}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
