import React, { useState } from "react";
import { Button, Card, Divider } from "antd";
import "tailwindcss/tailwind.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useNavigate } from "react-router-dom";

AOS.init();

const CourseTemplate = () => {
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);
  const navigate = useNavigate();

  const handleShowMore = () => {
    setShowMoreFeatures(!showMoreFeatures);
  };

  return (
    <>
      <h1 className="text-3xl mt-24 font-extrabold mb-4 text-center text-blue-500">
        All Courses
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-6">
        {/* Amazon Section */}
        <Card
          title="Amazon Course Overview"
          bordered
          className="w-full md:w-1/4 bg-white shadow-md rounded-lg"
          data-aos="flip-left"
        >
          {/* <video
            controls
            className="w-full rounded mb-4 border border-gray-300"
          >
            <source
              src="https://drive.google.com/file/d/1k3qshqy7FE0Rrm1KRN39BSkqYgCmgTx9/preview"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
          <iframe
            sandbox="allow-same-origin allow-scripts"
            src="https://drive.google.com/file/d/1k3qshqy7FE0Rrm1KRN39BSkqYgCmgTx9/preview"
            frameBorder="0"
            allowFullScreen
            width="100%"
            height="200"
            allow="autoplay; encrypted-media"
          />
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Learn Amazon business strategies</li>
            <li>Optimize product listings</li>
            <li>Increase sales and revenue</li>
          </ul>
          <div className="flex gap-4 mb-4">
            <Button
              onClick={() => {
                navigate("/login");
              }}
              type="primary"
              className="w-full md:w-auto"
            >
              Login
            </Button>
            <Button type="default" className="w-full md:w-auto">
              Enroll Now
            </Button>
          </div>
          <h1 className="text-lg font-semibold">Features</h1>
          <ul className="list-disc list-inside text-gray-700">
            <li>24/7 access to materials</li>
            <li>Expert instructor guidance</li>
            <li>Comprehensive resources</li>
            {showMoreFeatures && (
              <>
                <li>Advanced analytics tools</li>
                <li>Exclusive community access</li>
                <li>Weekly live Q&A sessions</li>
                <li>Personalized feedback</li>
                <li>Free updates for life</li>
              </>
            )}
          </ul>
          <Button type="link" onClick={handleShowMore} className="mt-2">
            {showMoreFeatures ? "Show Less" : "Show More"}
          </Button>
        </Card>

        {/* Website Section */}
        <Card
          title="Website Course Overview"
          bordered
          className="w-full md:w-1/4 bg-white shadow-md rounded-lg"
          data-aos="flip-left"
        >
          <iframe
            sandbox="allow-same-origin allow-scripts"
            src="https://drive.google.com/file/d/1k3qshqy7FE0Rrm1KRN39BSkqYgCmgTx9/preview"
            frameBorder="0"
            allowFullScreen
            width="100%"
            height="200"
            allow="autoplay; encrypted-media"
          />
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Build a professional website</li>
            <li>Master web development basics</li>
            <li>Understand UI/UX design</li>
          </ul>
          <div className="flex gap-4 mb-4">
            <Button type="primary" className="w-full md:w-auto">
              Login
            </Button>
            <Button type="default" className="w-full md:w-auto">
              Enroll Now
            </Button>
          </div>
          <h1 className="text-lg font-semibold">Features</h1>
          <ul className="list-disc list-inside text-gray-700">
            <li>Interactive coding exercises</li>
            <li>Access to templates</li>
            <li>Responsive design techniques</li>
            {showMoreFeatures && (
              <>
                <li>Backend integration</li>
                <li>SEO optimization</li>
                <li>Performance monitoring tools</li>
                <li>Custom domain setup</li>
                <li>Cloud hosting guidance</li>
              </>
            )}
          </ul>
          <Button type="link" onClick={handleShowMore} className="mt-2">
            {showMoreFeatures ? "Show Less" : "Show More"}
          </Button>
        </Card>
      </div>
    </>
  );
};

export default CourseTemplate;
