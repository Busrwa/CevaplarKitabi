import { useEffect } from 'react';

function AdSense({ slot }) {
  useEffect(() => {
    // AdSense scriptini sadece bir kez yükle
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    script.onload = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', width: '160px', height: '600px' }} // Dikey reklam boyutu
      data-ad-client="ca-pub-6577326627706746" // Senin Publisher ID
      data-ad-slot={slot} // Her reklam birimi için farklı slot ID
      data-ad-format="auto"
      data-full-width-responsive="false"
    ></ins>
  );
}

export default AdSense;
