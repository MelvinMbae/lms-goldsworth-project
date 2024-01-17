import React, { useState } from 'react';
import './profile.css';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const handleContact = () => {
    // Add your contact logic here
    alert('Contact button clicked!');
  };

  const handleSaveChanges = () => {
    // Add your save changes logic here
    alert('Profile changes saved!');
    setIsSaved(true);
  };

  return (
    <div className="App">
      <div className="profile-container">
        <h2>Profile Information</h2>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Age:
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <label>
          Upload Photo:
          <input type="file" accept="image/*" />
        </label>
        <label>
          About Me:
          <textarea
            value={paragraph}
            onChange={(e) => setParagraph(e.target.value)}
            rows="10"
          />
        </label>
        <button onClick={handleSaveChanges} disabled={paragraph.length < 1000}>
          Save Changes
        </button>
        {isSaved && <p>Changes saved!</p>}
      </div>

      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="path/to/facebook-icon.png" alt="Facebook" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="path/to/twitter-icon.png" alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="path/to/linkedin-icon.png" alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default App;


