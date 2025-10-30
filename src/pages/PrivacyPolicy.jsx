function PrivacyPolicy({ onBack }) {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <h1>Gizlilik Politikası</h1>

        <p>
          Cevaplar Kitabı Online olarak kullanıcılarımızın gizliliğine büyük önem veriyoruz. 
          Bu gizlilik politikası, sitemizi ziyaret edenlerin hangi bilgilerini topladığımızı, 
          bu bilgileri nasıl kullandığımızı ve kullanıcıların hangi haklara sahip olduğunu açıklamaktadır.
        </p>

        <h2>1. Toplanan Bilgiler</h2>
        <ul>
          <li>Google AdSense reklamları aracılığıyla çerezler ve benzeri teknolojilerle toplanan bilgiler.</li>
          <li>Tarayıcı türü, cihaz bilgisi ve IP adresi gibi teknik bilgiler.</li>
          <li>Kullanıcıların sitedeki etkileşimleri (butona tıklama gibi).</li>
        </ul>

        <h2>2. Bilgilerin Kullanımı</h2>
        <ul>
          <li>Reklam gösterimi ve kullanıcı deneyimini geliştirmek için kullanılır.</li>
          <li>Google ve üçüncü taraf reklam hizmetleri ile paylaşılabilir.</li>
          <li>Kişisel olarak sizi tanımlayan bilgiler üçüncü taraflarla paylaşılmaz.</li>
        </ul>

        <h2>3. Çerezler</h2>
        <p>Sitemiz Google AdSense çerezlerini kullanmaktadır. Çerezler, kullanıcı tercihlerini ve site kullanımını analiz etmek için kullanılır.</p>

        <h2>4. Kullanıcı Hakları</h2>
        <ul>
          <li>Tarayıcınızın ayarlarından çerezleri devre dışı bırakabilirsiniz.</li>
          <li>Google reklam ayarlarından kişiselleştirilmiş reklamları kapatabilirsiniz.</li>
        </ul>

        <h2>5. Değişiklikler</h2>
        <p>Bu gizlilik politikası zaman zaman güncellenebilir. Güncellemeler sitemizde yayımlandığında geçerli olur.</p>

        <h2>İletişim</h2>
        <p>Herhangi bir sorunuz olursa bize <a href="mailto:staysunst@gmail.com">staysunst@gmail.com</a> adresinden ulaşabilirsiniz.</p>

        <button onClick={onBack} className="back-button">
          Ana Sayfaya Dön
        </button>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
