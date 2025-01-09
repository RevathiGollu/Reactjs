
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  
  static getDerivedStateFromError(error) {
    return { hasError: true }; 
  }


  componentDidCatch(error, errorInfo) {
    console.log("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
    
      return (
        <div>
          <h2>Oops! Something went wrong.</h2>
          <p>We are sorry for the inconvenience. Please try again later.</p>
        </div>
      );
    }

    
    return this.props.children; 
  }
}

export default ErrorBoundary;
