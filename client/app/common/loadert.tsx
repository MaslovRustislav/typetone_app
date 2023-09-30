import React from "react";
import "./loader.css";
const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <p className="text-xl font-semibold mb-4">Summary is in process</p>
        <div className="flex space-x-2 justify-center">
          <div className="loader-dot animate-bounce">.</div>
          <div className="loader-dot animate-bounce">.</div>
          <div className="loader-dot animate-bounce">.</div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
