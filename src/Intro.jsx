import React, { useState } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const [showSecondPage, setShowSecondPage] = useState(false);

  return (
    <div className="relative w-screen h-screen" style={{
      backgroundImage: 'url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiatvnews.com%2Fentertainment%2Fregional-cinema%2Fleo-thalapathy-vijays-film-trailer-creates-history-beats-actors-bigil-records-2023-10-06-896433&psig=AOvVaw026xbIo6dBRytwbv0tcrhN&ust=1736311048347000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJD06Ovx44oDFQAAAAAdAAAAABAY")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      {/* First Page */}
      {!showSecondPage && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bgwhite"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 70, opacity: 0 }} // Scale up large enough to fully cover the screen
          transition={{ duration: 3, ease: "easeInOut" }}
          onUpdate={({ scale }) => {
            if (scale >= 50) {
              setShowSecondPage(true); // Trigger second page halfway through the animation
            }
          }}
        >
          <img
            src="./DJ VISHAK BUSINESS CARD.png"
            alt="Business Card"
            className="w-1/3 h-auto"
          />
        </motion.div>
      )}

      {/* Second Page */}
      {showSecondPage && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-white"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          {/* Leo image as background */}
          <img src="./DJ.jpg" alt="" className="h-full w-full object-cover" />
          
          {/* Business card image */}
          <img
            src="./DJ_VISHAK_BUSINESS_CARD_WHITE.png"
            alt="Business Card"
            className="absolute w-2/3 h-2/3 xs:w-max xs:h-max" 
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} // Center it on the second page
          />
        </motion.div>
      )}
    </div>
  );
};

export default Intro;
