import React from 'react';

const FeedbackPanel = ({ feedback, loading, error }) => {
  if (loading) {
    return (
      <div className="feedback-panel">
        <h2>AI Feedback</h2>
        <div className="loading">
          <div className="spinner"></div>
          <p>Analyzing your code...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="feedback-panel">
        <h2>AI Feedback</h2>
        <div className="error">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!feedback) {
    return (
      <div className="feedback-panel">
        <h2>AI Feedback</h2>
        <div className="placeholder">
          <p>Click "Analyze Code" to get AI-powered feedback on your code</p>
        </div>
      </div>
    );
  }

  const FeedbackSection = ({ title, items, type }) => (
    <div className={`feedback-section ${type}`}>
      <h3>{title}</h3>
      {items.length === 0 ? (
        <p className="no-issues">No issues found</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index} className={`severity-${item.severity}`}>
              {item.line && <span className="line-number">Line {item.line}: </span>}
              {item.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="feedback-panel">
      <h2>AI Feedback</h2>
      <div className="feedback-content">
        <FeedbackSection 
          title="🐛 Bugs" 
          items={feedback.bugs} 
          type="bugs" 
        />
        <FeedbackSection 
          title="📊 Code Quality" 
          items={feedback.quality} 
          type="quality" 
        />
        <FeedbackSection 
          title="⚡ Optimizations" 
          items={feedback.optimizations} 
          type="optimizations" 
        />
        <FeedbackSection 
          title="✨ Best Practices" 
          items={feedback.bestPractices} 
          type="best-practices" 
        />
      </div>
    </div>
  );
};

export default FeedbackPanel;