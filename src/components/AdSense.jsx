import { useEffect } from 'react';

function AdSense({ slot }) {
  useEffect(() => {
    // AdSense scriptini yükle
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div className="adsense-container">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6577326627706746" // Buraya kendi publisher ID'nizi yazın
        data-ad-slot={slot}
        data-ad-format="vertical"
        data-full-width-responsive="false"
      ></ins>
      
      {/* Geliştirme için placeholder */}
      <div className="adsense-placeholder">
        AdSense Reklam Alanı
        <br />
        <small>160x600</small>
      </div>
    </div>
  );
}

export default AdSense;