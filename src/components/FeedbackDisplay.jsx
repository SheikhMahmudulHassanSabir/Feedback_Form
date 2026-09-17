function FeedbackDisplay({ submittedFeedback }) {
  return (
    <section className="card display-card">
      <div className="card-heading">
        <div>
          <p className="section-label">Feedback Display</p>
          <h2>Submitted feedback</h2>
        </div>
        <span className="step-badge">02</span>
      </div>

      {!submittedFeedback ? (
        <div className="empty-state">
          <div className="empty-icon">✦</div>
          <h3>No feedback submitted yet</h3>
          <p>Complete the form to see your feedback displayed here.</p>
        </div>
      ) : (
        <article className="feedback-result" aria-live="polite">
          <div className="result-topline">
            <span className="success-dot" />
            <span>Feedback received</span>
          </div>

          <div className="result-item">
            <span>Student Name</span>
            <strong>{submittedFeedback.studentName}</strong>
          </div>
          <div className="result-item">
            <span>Course</span>
            <strong>{submittedFeedback.course}</strong>
          </div>
          <div className="result-item">
            <span>Subject</span>
            <strong>{submittedFeedback.subject}</strong>
          </div>
          <div className="result-item">
            <span>Rating</span>
            <strong>{'★'.repeat(Number(submittedFeedback.rating))}{'☆'.repeat(5 - Number(submittedFeedback.rating))}</strong>
          </div>
          <div className="result-item feedback-text">
            <span>Feedback</span>
            <p>{submittedFeedback.feedback}</p>
          </div>
          <p className="submitted-time">Submitted: {submittedFeedback.submittedAt}</p>
        </article>
      )}
    </section>
  );
}

export default FeedbackDisplay;
