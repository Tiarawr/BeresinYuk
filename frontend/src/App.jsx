import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://via.placeholder.com/400x200" alt="Sample" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Hello DaisyUI!</h2>
          <p>This is a card component using DaisyUI.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
