import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/globals.css";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Application Error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-primary flex items-center justify-center p-4">
          <div className="text-center max-w-lg">
            {/* Error Icon */}
            <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>

            <h1 className="font-display text-3xl font-bold text-white mb-4">
              Something went wrong
            </h1>

            <p className="text-accent-silver/60 mb-6">
              We apologize for the inconvenience. Please try refreshing the page
              or contact support if the problem persists.
            </p>

            {/* Error Details (only in development) */}
            {import.meta.env.DEV && this.state.error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6 text-left">
                <p className="text-red-400 text-sm font-mono break-all">
                  {this.state.error.toString()}
                </p>
              </div>
            )}

            <div className="flex gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="bg-accent-orange text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent-orange/90 transition-colors"
              >
                Go to Homepage
              </button>
              <button
                onClick={() => window.location.reload()}
                className="glass glass-hover px-6 py-3 rounded-xl font-semibold"
              >
                Refresh Page
              </button>
            </div>

            <p className="text-accent-silver/40 text-sm mt-8">
              If the problem persists, please contact us at{" "}
              <a
                href="mailto:support@yourstrucking.com.au"
                className="text-accent-orange hover:underline"
              >
                support@yourstrucking.com.au
              </a>{" "}
              or call{" "}
              <a
                href="tel:1300878254"
                className="text-accent-orange hover:underline"
              >
                1300 TRUCKING
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Initialize the application
const initApp = () => {
  const rootElement = document.getElementById("root");

  if (!rootElement) {
    throw new Error(
      "Root element not found. Please check your index.html file.",
    );
  }

  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>,
  );
};

// Start the application
initApp();

// Hot Module Replacement (HMR) for development
if (import.meta.hot) {
  import.meta.hot.accept();
}
