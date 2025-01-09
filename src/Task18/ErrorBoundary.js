// src/components/ErrorBoundary.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  // This method is called when an error occurs in a child component
  static getDerivedStateFromError(error) {
    return { hasError: true }; // Update state to trigger fallback UI
  }

  // This lifecycle method is called to log error information
  componentDidCatch(error, errorInfo) {
    console.log("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error occurs
      return (
        <div>
          <h2>Oops! Something went wrong.</h2>
          <p>We are sorry for the inconvenience. Please try again later.</p>
        </div>
      );
    }

    // If no error, render the children components
    return this.props.children; 
  }
}

export default ErrorBoundary;
