import { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackDisplay from './components/FeedbackDisplay';

const initialFeedback = {
  studentName: '',
  course: '',
  subject: '',
  rating: '',
  feedback: '',
};

function App() {
  const [submittedFeedback, setSubmittedFeedback] = useState(null);

  const handleFeedbackSubmit = (feedbackData) => {
    setSubmittedFeedback(feedbackData);
  };

  return (
    <main className="app-shell">
      <section className="page-header">
        <p className="eyebrow">Student Portal</p>
        <h1>Student Feedback Form</h1>
        <p className="subtitle">
          Share your experience and help us improve the learning environment.
        </p>
      </section>

      <section className="content-grid">
        <FeedbackForm
          initialValues={initialFeedback}
          onSubmitFeedback={handleFeedbackSubmit}
        />
        <FeedbackDisplay submittedFeedback={submittedFeedback} />
      </section>
    </main>
  );
}

export default App;
