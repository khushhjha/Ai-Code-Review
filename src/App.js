import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import FeedbackPanel from './components/FeedbackPanel';
import './App.css';

function App() {
  const [code, setCode] = useState('// Paste your JavaScript or React code here\nfunction example() {\n  console.log("Hello World");\n}');
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyzeCode = async () => {
    if (!code.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Simulate AI analysis - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock feedback data
      const mockFeedback = {
        bugs: [
          { line: 2, message: "Consider adding error handling", severity: "medium" }
        ],
        quality: [
          { line: 1, message: "Function could benefit from JSDoc comments", severity: "low" },
          { line: 3, message: "Use const instead of console.log for production code", severity: "medium" }
        ],
        optimizations: [
          { message: "Consider using arrow functions for better performance", severity: "low" }
        ],
        bestPractices: [
          { message: "Add proper error boundaries for React components", severity: "high" }
        ]
      };
      
      setFeedback(mockFeedback);
    } catch (err) {
      setError('Failed to analyze code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>AI Code Review</h1>
        <p>Get instant feedback on your JavaScript and React code</p>
      </header>
      
      <main className="app-main">
        <div className="editor-section">
          <div className="editor-header">
            <h2>Code Editor</h2>
            <button 
              onClick={analyzeCode} 
              disabled={loading || !code.trim()}
              className="analyze-btn"
            >
              {loading ? 'Analyzing...' : 'Analyze Code'}
            </button>
          </div>
          <CodeEditor code={code} onChange={setCode} />
        </div>
        
        <div className="feedback-section">
          <FeedbackPanel 
            feedback={feedback} 
            loading={loading} 
            error={error} 
          />
        </div>
      </main>
    </div>
  );
}

export default App;