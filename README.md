# AI Code Review

A React frontend application that provides AI-powered code analysis for JavaScript and React code.

## Features

- **Code Editor**: Monaco editor with syntax highlighting
- **AI Feedback**: Bug identification, code quality issues, optimization suggestions, and best practices
- **Responsive UI**: Clean, modern interface that works on all devices
- **Loading States**: Proper loading and error handling
- **Reusable Components**: Well-structured component architecture

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Paste or type your JavaScript/React code in the editor
2. Click "Analyze Code" to get AI feedback
3. Review the feedback in the right panel:
   - 🐛 **Bugs**: Potential issues and errors
   - 📊 **Code Quality**: Maintainability and readability suggestions
   - ⚡ **Optimizations**: Performance improvements
   - ✨ **Best Practices**: Industry standards and conventions

## Customization

To integrate with a real AI service:

1. Replace the mock API call in `App.js` with your actual endpoint
2. Update the feedback data structure as needed
3. Add authentication if required

## Tech Stack

- React 18
- Monaco Editor
- CSS Grid & Flexbox
- Modern JavaScript (ES6+)