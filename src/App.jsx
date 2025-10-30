import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import BookButton from './components/BookButton';
import Answer from './components/Answer';
import AdSense from './components/AdSense';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookieConsent from './components/CookieConsent';
import answers from './data/answers.json';

function App() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [currentPage, setCurrentPage] = useState('home'); // 'home' veya 'privacy'

  const handleBookClick = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    setCurrentAnswer(answers[randomIndex]);
    setShowAnswer(true);
  };

  const handleTryAgain = () => {
    setShowAnswer(false);
    setCurrentAnswer('');
  };

  return (
    <div className="app">
      {/* Çerez Kabul Uyarısı */}
      <CookieConsent />

      {currentPage === 'home' ? (
        <>
          {/* Sol Reklam */}
          <div className="ad-container ad-left">
            <AdSense slot="3046799928" />
          </div>

          {/* Ana İçerik */}
          <div className="main-content">
            <Header />

            <div className="content-wrapper">
              {!showAnswer ? (
                <BookButton onClick={handleBookClick} />
              ) : (
                <Answer answer={currentAnswer} onTryAgain={handleTryAgain} />
              )}
            </div>

            {/* Gizlilik Politikası Butonu */}
            <button
              onClick={() => setCurrentPage('privacy')}
              className="privacy-button"
            >
              Gizlilik Politikası
            </button>
          </div>

          {/* Sağ Reklam */}
          <div className="ad-container ad-right">
            <AdSense slot="3046799928" />
          </div>
        </>
      ) : (
        <PrivacyPolicy onBack={() => setCurrentPage('home')} />
      )}
    </div>
  );
}

export default App;
