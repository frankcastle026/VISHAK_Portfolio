import React from "react";

function Experience() {
  return (
    <div className="p-10 bg-white flex flex-col xs:flex-col lg:flex-row lg:items-center lg:justify-between" style={{
      boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -2px rgba(0, 0, 0, 0.1)',
    }}>
      {/* Image Section */}
      <div className="relative w-full h-auto xs:order-1 lg:order-2 lg:w-1/2 lg:h-[400px]">
        <img
          className="w-full h-full object-cover"
          src="./image1.jpg"
          alt="Experience"
        />
      </div>

      {/* Text Section */}
      <div className="bg-white xs:bg-opacity-25 lg:bg-opacity-100 px-4 py-6 flex flex-col justify-center w-full xs:w-[90%] xs:ml-4 xs:order-2 max-w-md lg:w-1/2 lg:order-1 lg:ml-0">
        <h1 className="font-arvo font-arvoRegular text-3xl">
          Your Experience Title
        </h1>
        <p className="font-raleway font-raleway-400 font-optical-sizing uppercase pt-6">
          About your Experience (10 years of spinning fire beats 🎧🔥 From icons
          to crowds, the vibe never stops! 🎶🙌)
        </p>
      </div>
    </div>
  );
}

export default Experience;
