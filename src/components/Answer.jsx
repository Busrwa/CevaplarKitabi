function Answer({ answer, onTryAgain }) {
  return (
    <div className="answer-container">
      <div className="answer-box">
        <p className="answer-text">{answer}</p>
      </div>
      <button className="try-again-button" onClick={onTryAgain}>
        Tekrar Sor
      </button>
    </div>
  );
}

export default Answer;