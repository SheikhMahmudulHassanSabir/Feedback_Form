import { useState } from 'react';

const courseOptions = ['BCA', 'BBA', 'B.Com', 'BA', 'B.Sc'];
const subjectOptions = [
  'Web Development',
  'Database Management System',
  'Computer Networks',
  'Artificial Intelligence',
  'Software Engineering',
];
const ratingOptions = [1, 2, 3, 4, 5];

function FeedbackForm({ initialValues, onSubmitFeedback }) {
  const [formData, setFormData] = useState(initialValues);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setError('');
    setSuccess(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.studentName.trim()) {
      setError('Please enter your student name.');
      return;
    }

    if (!formData.course) {
      setError('Please select your course.');
      return;
    }

    if (!formData.subject) {
      setError('Please select your subject.');
      return;
    }

    if (!formData.rating) {
      setError('Please select a rating.');
      return;
    }

    if (!formData.feedback.trim()) {
      setError('Please enter your feedback.');
      return;
    }

    onSubmitFeedback({
      ...formData,
      studentName: formData.studentName.trim(),
      feedback: formData.feedback.trim(),
      submittedAt: new Date().toLocaleString(),
    });
    setSuccess(true);
    setError('');
  };

  return (
    <section className="card form-card">
      <div className="card-heading">
        <div>
          <p className="section-label">Feedback Form</p>
          <h2>Tell us what you think</h2>
        </div>
        <span className="step-badge">01</span>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="studentName">Student Name</label>
          <input
            id="studentName"
            name="studentName"
            type="text"
            placeholder="Enter your full name"
            value={formData.studentName}
            onChange={updateField}
          />
        </div>

        <div className="form-group">
          <label htmlFor="course">Course</label>
          <select id="course" name="course" value={formData.course} onChange={updateField}>
            <option value="">Select course</option>
            {courseOptions.map((course) => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <select id="subject" name="subject" value={formData.subject} onChange={updateField}>
            <option value="">Select subject</option>
            {subjectOptions.map((subject) => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </div>

        <fieldset className="form-group rating-fieldset">
          <legend>Rating</legend>
          <div className="rating-options">
            {ratingOptions.map((rating) => (
              <label className={`rating-option ${String(rating) === formData.rating ? 'selected' : ''}`} key={rating}>
                <input
                  type="radio"
                  name="rating"
                  value={rating}
                  checked={formData.rating === String(rating)}
                  onChange={updateField}
                />
                <span>{rating}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="form-group">
          <label htmlFor="feedback">Feedback</label>
          <textarea
            id="feedback"
            name="feedback"
            rows="5"
            placeholder="Write your feedback here..."
            value={formData.feedback}
            onChange={updateField}
          />
        </div>

        {error && <p className="message error-message" role="alert">{error}</p>}
        {success && <p className="message success-message" role="status">Feedback Submitted Successfully</p>}

        <button className="submit-button" type="submit">Submit Feedback</button>
      </form>
    </section>
  );
}

export default FeedbackForm;
