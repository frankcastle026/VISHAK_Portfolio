import React from "react";

function Me() {
  return (
    <div className="bg-black grid grid-cols-10 grid-rows-10 gap-5 p-5 xs:pt-10">
      {/* Image 1 */}
      <div className="col-start-2 col-end-7 row-start-1 row-end-4 pt-5">
        <img
          src="LEO.jpg"
          alt="Image 1"
          className="w-full h-full object-cover sm:w-full sm:h-full lg:w-[600px] lg:h-[300px]"
        />
      </div>

      {/* Image 2 */}
      <div className="col-start-6 col-end-11 row-start-3 row-end-6">
        <img
          src="LEO2.jpg"
          alt="Image 2"
          className="w-full h-full object-cover sm:w-full sm:h-full lg:w-[600px] lg:h-[300px]"
        />
      </div>

      {/* Image 3 */}
      <div className="col-start-2 col-end-7 row-start-5 row-end-8">
        <img
          src="LEO3.jpg"
          alt="Image 3"
          className="w-full h-full object-cover sm:w-full sm:h-full lg:w-[600px] lg:h-[300px]"
        />
      </div>

      {/* Image 4 */}
      <div className="col-start-6 col-end-11 row-start-7 row-end-10">
        <img
          src="LEO4.jpg"
          alt="Image 4"
          className="w-full h-full object-cover sm:w-full sm:h-full lg:w-[600px] lg:h-[300px]"
        />
      </div>
    </div>
  );
}

export default Me;
