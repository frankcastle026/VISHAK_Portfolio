import React, { useState } from "react";

const About = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

  // Function to handle background change
  const handleBackgroundChange = (imageUrl) => {
    setBackgroundImage(imageUrl);
  };

  return (
    <div className="relative overflow-hidden bg-black text-white h-screen flex flex-col">
      {/* Image div (appears on hover with smooth transition) */}
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 p-8 transition-opacity ${
          backgroundImage ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "background-image 0.5s ease-in-out",
        }}
      ></div>

      {/* Line 1: Left to Right */}
      <div className="animate-left-to-right whitespace-nowrap flex-1 z-20 relative">
        <button
          onMouseEnter={() => handleBackgroundChange("./LEO.jpg")}
          onTouchStart={() => handleBackgroundChange("./LEO.jpg")}
          className="mx-4 text-9xl  uppercase font-rubik-vinyl group"
        >
          EVENT1
        </button>
        <button
          onMouseEnter={() => handleBackgroundChange("./LEO2.jpg")}
          onTouchStart={() => handleBackgroundChange("./LEO2.jpg")}
          className="mx-4 text-9xl  uppercase font-rubik-vinyl group"
        >
          EVENT2
        </button>
      </div>

      {/* Line 2: Right to Left */}
      <div className="animate-right-to-left whitespace-nowrap flex-1 z-20 relative">
        <button
          onMouseEnter={() => handleBackgroundChange("./LEO3.jpg")}
          onTouchStart={() => handleBackgroundChange("./LEO3.jpg")}
          className="mx-4 text-9xl  uppercase font-rubik-vinyl group"
        >
          EVENT3
        </button>
        <button
          onMouseEnter={() => handleBackgroundChange("./LEO4.jpg")}
          onTouchStart={() => handleBackgroundChange("./LEO4.jpg")}
          className="mx-4 text-9xl  uppercase font-rubik-vinyl group"
        >
          EVENT4
        </button>
      </div>

      {/* Line 3: Left to Right */}
      <div className="animate-left-to-right whitespace-nowrap flex-1 z-20 relative">
        <button
          onMouseEnter={() => handleBackgroundChange("./LEO5.jpg")}
          onTouchStart={() => handleBackgroundChange("./LEO5.jpg")}
          className="mx-4 text-9xl  uppercase font-rubik-vinyl group"
        >
          EVENT5
        </button>
        <button
          onMouseEnter={() => handleBackgroundChange("./LEO6.jpg")}
          onTouchStart={() => handleBackgroundChange("./LEO6.jpg")}
          className="mx-4 text-9xl  uppercase font-rubik-vinyl group"
        >
          EVENT6
        </button>
      </div>
    </div>
  );
};

export default About;
