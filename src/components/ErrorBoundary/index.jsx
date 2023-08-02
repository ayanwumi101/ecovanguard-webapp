import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(err) {
    this.setState = { hasError: true, err };
  }
  render() {
    return (
      <>
        {this.state.hasError ? (
          <div style={{ textAlign: "center" }}>
            <h1>Something went wrong.</h1>
            <h1>An eco error occurred: {this.state.err} </h1>
          </div>
        ) : (
          this.props.children
        )}
      </>
    );
  }
}
export default ErrorBoundary;
