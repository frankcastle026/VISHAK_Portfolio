import React, { useState } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const [showSecondPage, setShowSecondPage] = useState(false);

  return (
    <div className="bg-white flex justify-center items-center h-screen w-screen ">
      <img src="./DJ VISHAK BUSINESS CARD.png" alt="logo" className="justify-items-center" />
    </div>
  );
};

export default Intro;
