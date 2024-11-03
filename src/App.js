// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResponse(null);
    setError(null);
    setIsProcessing(true);

    const formData = new FormData();
    formData.append('image', image);

    try {
      const res = await fetch('http://127.0.0.1:5000/vocab', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  // Function to render vocabulary groups in cards
  const renderVocabularyGroups = () => {
    if (!response || !response.vocab || !response.vocab.groups) {
      return null;
    }
  
    return response.vocab.groups.map((group) => (
      <div key={group.group_number} className="card">
        <h2>Group {group.group_number}</h2>
        {group.words.map((word, index) => (
          <div key={index} className="word-item">
            <h3 className="keyword">{word.word}</h3> {/* Highlighted keyword */}
            <p><strong>Meaning:</strong> {word.meaning}</p>
            <p><strong>Formal Writing Sentence:</strong> {word.formal_writing_sentence}</p>
            <p><strong>Semi-Formal Speaking Sentence:</strong> {word.semi_formal_speaking_sentence}</p>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="App">
      <h1 className="app-header">Image Upload and Vocabulary Extraction</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            className="file-input"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          <button type="submit" className="submit-button" disabled={isProcessing}>
            {isProcessing ? 'Processing...' : 'Submit'}
          </button>
        </form>
        {isProcessing && <p className="processing-message">Processing, Please Wait...</p>}
        {error && (
          <div className="error-container">
            <h2>Error:</h2>
            <p>{error}</p>
          </div>
        )}
        <div className="cards-container">
          {renderVocabularyGroups()}
        </div>
      </div>
    </div>
  );
}

export default App;
