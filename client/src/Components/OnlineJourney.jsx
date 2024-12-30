import React from "react";
import { Button } from "antd";

const OnlineJourney = () => {
  return (
    <div className="p-4">
      {/* Title */}
      <div className="w-full mb-8 mx-auto pb-2 px-4 bg-gradient-to-r mb-3 from-blue-500 to-red-300 shadow-lg rounded-lg">
        <h1 className="text-2xl text-center p-4 font-bold text-white">
          Online Journey
        </h1>
      </div>{" "}
      {/* Video Container */}
      <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
        {/* Video 1 */}
        <div className="flex-none w-64">
          <iframe
            sandbox="allow-same-origin allow-scripts"
            src="https://drive.google.com/file/d/1k3qshqy7FE0Rrm1KRN39BSkqYgCmgTx9/preview"
            frameBorder="0"
            allowFullScreen
            width="100%"
            height="200"
            allow="autoplay; encrypted-media"
          />
          {/* <iframe
            width="100%"
            sandbox="allow-same-origin allow-scripts"
            height="200"
            src="https://drive.google.com/file/d/1k3qshqy7FE0Rrm1KRN39BSkqYgCmgTx9/preview"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe> */}
          <p className="text-center mt-2 font-semibold">Products</p>
        </div>

        {/* Video 2 */}
        <div className="flex-none w-64">
          <iframe
            sandbox="allow-same-origin allow-scripts"
            src="https://drive.google.com/file/d/1k3qshqy7FE0Rrm1KRN39BSkqYgCmgTx9/preview"
            frameBorder="0"
            allowFullScreen
            width="100%"
            height="200"
            allow="autoplay; encrypted-media"
          />
          <p className="text-center mt-2 font-semibold">
            Account Creation and Listings
          </p>
        </div>

        {/* Video 3 */}
        <div className="flex-none w-64">
          <iframe
            sandbox="allow-same-origin allow-scripts"
            src="https://drive.google.com/file/d/1k3qshqy7FE0Rrm1KRN39BSkqYgCmgTx9/preview"
            frameBorder="0"
            allowFullScreen
            width="100%"
            height="200"
            allow="autoplay; encrypted-media"
          />
          <p className="text-center mt-2 font-semibold">Learnings</p>
        </div>

        {/* Video 4 */}
        <div className="flex-none w-64">
          <iframe
            sandbox="allow-same-origin allow-scripts"
            src="https://drive.google.com/file/d/1k3qshqy7FE0Rrm1KRN39BSkqYgCmgTx9/preview"
            frameBorder="0"
            allowFullScreen
            width="100%"
            height="200"
            allow="autoplay; encrypted-media"
          />
          <p className="text-center mt-2 font-semibold">Support</p>
        </div>

        {/* Video 5 */}
        <div className="flex-none w-64">
          <iframe
            sandbox="allow-same-origin allow-scripts"
            src="https://drive.google.com/file/d/1k3qshqy7FE0Rrm1KRN39BSkqYgCmgTx9/preview"
            frameBorder="0"
            allowFullScreen
            width="100%"
            height="200"
            allow="autoplay; encrypted-media"
          />
          <p className="text-center mt-2 font-semibold">Content</p>
        </div>
      </div>
      {/* Join Now Button */}
      <div className="text-center mt-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-500">
          ALL ELEMENTS ARE REQUIRED FOR GROWTH
        </h1>
        <Button
          onClick={() => {
            const phoneNumber = "7300054369";
            const message = encodeURIComponent(
              "Hi, I would like to chat about enrollment."
            );
            window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
          }}
          type="primary"
          className="w-full md:w-auto"
        >
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default OnlineJourney;
