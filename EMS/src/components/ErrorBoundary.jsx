import React from "react";

// Error boundaries have no hook equivalent — they must be class components.
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Unhandled render error:", error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-slate-950 p-6 text-center text-slate-100">
        <h1 className="text-2xl font-semibold">Something went wrong</h1>
        <p className="max-w-md text-sm text-slate-400">
          The app hit an unexpected error. Reloading usually fixes it. If it
          keeps happening, your saved data may be corrupted — clearing site data
          will reset it.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="rounded-lg bg-sky-400 px-4 py-2 text-sm font-medium text-sky-950 transition-colors hover:bg-sky-300"
        >
          Reload
        </button>
      </div>
    );
  }
}

export default ErrorBoundary;
