import BackgroundEffects from "../Components/BackgroundEffects";

const TestComplete = ({ nextPage }) => {
  return (
    <section className="mission-page">
      <BackgroundEffects />

      <div className="complete-content">
        <h1>TEST COMPLETE</h1>

        <div className="heart-row">
          ❤️ ❤️ ❤️ ❤️
        </div>

        <p>
          Congratulations, Abbas. Your husband
          privileges have been renewed. 😂❤️
        </p>

        <button
          className="mission-button"
          onClick={nextPage}
        >
          CONTINUE MISSION →
        </button>
      </div>
    </section>
  );
};

export default TestComplete;