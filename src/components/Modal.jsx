import React from "react";

function Modal() {
  return (
    <div className="w-screen pb-56 md:w-88 md:pb-56 relative z-50">
      <div className="absolute w-full h-full">
        <iframe
          title="video"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/3h0_v1cdUIA"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Modal;
