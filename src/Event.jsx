import React from "react";

function Event() {
  return (
    <div className="bg-white pb-12 xs:px-4">
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="xl:text-6xl xs:text-5xl font-merriweather xl:font-semibold xs:font-normal text-black">
          Latest Events
        </h1>
        <p className="py-4 text-black uppercase">
          Spinning beats that ignite the night, creating unforgettable moments on every dance floor
        </p>
      </header>

      {/* Video Grid Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 xs:gap-10 justify-center">
          {/* Video 1 */}
          <div className="w-full lg:w-[350px] lg:h-[350px] relative pb-[100%] lg:pb-0 bg-gray-300 mx-auto ">
            <video className="absolute top-0 left-0 w-full h-full object-cover" controls>
              <source src="Video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video 2 */}
          <div className="w-full lg:w-[350px] lg:h-[350px] relative pb-[100%] lg:pb-0 bg-gray-300 mx-auto">
            <video className="absolute top-0 left-0 w-full h-full object-cover" controls>
              <source src="Video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video 3 */}
          <div className="w-full lg:w-[350px] lg:h-[350px] relative pb-[100%] lg:pb-0 bg-gray-300 mx-auto">
            <video className="absolute top-0 left-0 w-full h-full object-cover" controls>
              <source src="Video3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video 4 */}
          <div className="w-full lg:w-[350px] lg:h-[350px] relative pb-[100%] lg:pb-0 bg-gray-300 mx-auto">
            <video className="absolute top-0 left-0 w-full h-full object-cover" controls>
              <source src="Video5.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video 5 */}
          <div className="w-full lg:w-[350px] lg:h-[350px] relative pb-[100%] lg:pb-0 bg-gray-300 mx-auto">
            <video className="absolute top-0 left-0 w-full h-full object-cover" controls>
              <source src="Video6.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video 6 */}
          <div className="w-full lg:w-[350px] lg:h-[350px] relative pb-[100%] lg:pb-0 bg-gray-300 mx-auto">
            <video className="absolute top-0 left-0 w-full h-full object-cover" controls>
              <source src="Video7.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
