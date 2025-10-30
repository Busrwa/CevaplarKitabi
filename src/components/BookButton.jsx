import Lottie from 'lottie-react';
import bookAnimation from '../../public/book-animation.json';

function BookButton({ onClick }) {
  return (
    <div className="book-button-container" onClick={onClick}>
      <div className="lottie-animation">
        <Lottie animationData={bookAnimation} loop={true} />
      </div>
      <p className="book-button-text">Tek bir soruya odaklanın ve cevabı almak için butona nazikçe tıklayın.</p>
    </div>
  );
}

export default BookButton;