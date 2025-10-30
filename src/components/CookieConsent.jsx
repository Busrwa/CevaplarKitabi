import { useState, useEffect } from 'react';
import './CookieConsent.css';

function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-consent">
      <p>
        Bu site çerezleri kullanır. Kullanımınızı geliştirmek ve reklamları göstermek için çerezleri kabul etmelisiniz.
      </p>
      <button onClick={handleAccept}>Kabul Et</button>
    </div>
  );
}

export default CookieConsent;
