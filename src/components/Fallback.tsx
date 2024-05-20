import React from "react";
import "./Fallback.css";

const Fallback: React.FC = () => {
    
  const handleRetry = () => {
    window.location.href = window.location?.origin;
  };

  return (
    <div className="container">
      <div className="heading">Oops! It’s not you, it’s us.</div>
      <div className="bodyText">
        We're sorry, but an unexpected error occurred.
      </div>
      <button className="button" onClick={handleRetry}>
        Retry
      </button>
    </div>
  );
};

export default Fallback;
