import React from "react";

function NavBar() {
  return (
    <div>
      <div className="flex mt-5 ml-5">
        <img src="public\images\logo.png" className="h-10" />
        <div className="flex gap-100">
          <div className="flex rounded-3xl ml-4 pl-4 w-auto border-1 pr-5 justify-center items-center">
            <input type="text" placeholder="stationary,course,etc... " />
            <img src="public\images\search.png" className="h-4" />
          </div>
          <div className="flex gap-4 items-center ">
            <div className="flex gap-4 list-none justify-center items-center">
              <li>Home</li>
              <li>Product</li>
              <li>Courses</li>
              <li>Forms</li>
              <li>About</li>
              <li>Contact</li>
            </div>
            <div>
              <button className="border-2 rounded-2xl pl-1.5 pr-1.5 bg-[#0011FF] text-white pb-0.5">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
