import React from "react";
import sponsorbg from "../assets/sponsorbg.png";

import { Link } from "react-router-dom";
const AbstractSub = () => {
  return (
    <div
      className="relative px-4 py-12 bg-teal-950"
      style={{
        backgroundImage: `url(${sponsorbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="sponsors"
    >
      <div className="absolute inset-0 bg-[#D9D9D9]/70 backdrop-blur-sm" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-black mb-12">
        CALL FOR PAPER
        </h2>

        <h3 className="text-center text-lg text-muted-foreground  mx-auto mb-12 md:text-2xl">
        Student, Research Scholars & Academicians are invited to submit their paper in our International
        Conference
        </h3>
        <p className="text-primary text-center font-bold">Best paper will be awarded</p>
        {/* Important Dates Section */}
        <hr className="border border-gray-500 my-6" />
        <div className="space-y-4">
              <h2 className="text-2xl font-bold text-center">IMPORTANT DATES</h2>
              <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
                <div className="font-semibold">Registration (last date)</div>
                <div className="text-center">January 31, 2025</div>
                <div className="font-semibold">Abstract Submission (last date)</div>
                <div className="text-center">January 30, 2025</div>
                <div className="font-semibold">Notification of Acceptance/Rejection</div>
                <div className="text-center">February 02, 2025</div>
              </div>
            </div>
            {/* Publishing Details Section */}
            <div className="space-y-4 mt-8">
              <h2 className="text-2xl font-bold text-center">PAPER PUBLISHING DETAILS</h2>
              <div className="text-center space-y-2">
                <p>
                  Selected Paper will be published in Scopus Indexed/
                  <br />
                  Web of Science Journal
                </p>
                <p className="text-sm text-muted-foreground">Note: Journal Publication Extra charges applicable</p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4 mt-4">
            <a href="https://forms.gle/5ZgDVsYRY2nHC8QP6" target="_blank"  className="bg-black hover:bg-gray-900  text-white font-bold rounded-2xl p-4 w-full">
                  Submit Abstract
                </a>
            </div>
      </div>
    </div>
  );
};

export default AbstractSub;
