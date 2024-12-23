import React, { useEffect, useState } from "react";
import { Card, Button, Drawer, message } from "antd";
import axios from "axios";
import UserLayout from "../Layouts/UserLayout";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const LiveTraining = () => {
  const [prevVideos, setPrevVideos] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${backendUrl}/admin/getprevvideo`);
      setPrevVideos(response.data.videos);
    } catch (error) {
      message.error("Failed to fetch videos.");
    }
  };

  const fetchTrainings = async () => {
    try {
      const response = await axios.get(
        `${backendUrl}/admin/getupcomingtrainings`
      );
      setTrainings(response.data.trainings);
    } catch (error) {
      message.error("Failed to fetch upcoming trainings.");
    }
  };

  useEffect(() => {
    fetchVideos();
    fetchTrainings();
  }, []);

  const handleVideoClick = (link) => {
    setSelectedVideo(link);
    setDrawerVisible(false); // Close drawer on mobile when video is selected
  };

  const handleVideoClose = () => {
    setSelectedVideo(null); // Close video and show upcoming trainings again
  };

  return (
    <UserLayout>
      <div className="flex flex-col md:flex-row h-screen">
        {/* Main Content */}
        <div
          className={`${
            selectedVideo ? "md:w-3/4" : "md:w-full"
          } flex-grow bg-gray-100 flex items-center justify-center transition-all duration-300`}
        >
          {selectedVideo ? (
            <div className="w-full h-full p-4">
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo}
                title="Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
              <Button
                type="default"
                className="mt-4"
                onClick={handleVideoClose}
              >
                Close Video
              </Button>
            </div>
          ) : (
            <div className="pl-4 w-full">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent mb-6">
                Upcoming Trainings
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {trainings.map((training) => (
                  <Card
                    key={training._id}
                    bordered={false}
                    hoverable
                    className="w-full transform transition-all duration-300 hover:scale-105 shadow-lg rounded-lg"
                  >
                    {/* Cover Image */}
                    <img
                      alt={training.topic}
                      src="https://thumbs.dreamstime.com/b/upcoming-banner-template-ribbon-label-sign-sticker-195330724.jpg"
                      className="object-cover h-40 w-full rounded-t-lg"
                    />

                    {/* Card Content */}
                    <div className="p-4">
                      {/* Topic */}
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {training.topic}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 mb-4">
                        {training.description}
                      </p>

                      {/* Date */}
                      <p className="text-sm text-gray-500">
                        Date:{" "}
                        {training.date
                          ? new Date(training.date).toLocaleDateString("en-GB") // Formats to dd/mm/yyyy
                          : "TBA"}
                      </p>
                      <p className="text-sm text-gray-500">
                        Time: {training.time || "TBA"}
                      </p>

                      {/* Join Button */}
                      <Button
                        type="primary"
                        href={training.link}
                        target="_blank"
                        block
                        className="mt-4 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600"
                      >
                        Join Now
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Previous Video List */}
        <div
          className={`${
            selectedVideo ? "md:w-1/4" : "hidden md:block"
          } bg-gray-100 p-4 overflow-auto transition-all duration-300`}
        >
          <h2 className="text-lg font-semibold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent mb-4">
            Previous Trainings
          </h2>
          <ul className="space-y-6">
            {prevVideos.map((video) => (
              <li
                key={video._id}
                className="cursor-pointer text-lg text-blue-600 hover:text-blue-800 transition-all duration-300"
                onClick={() => handleVideoClick(video.link)}
              >
                <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition-all duration-300">
                  {video.topic}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Drawer for Mobile View */}
        <Drawer
          title="Previous Trainings"
          placement="right"
          onClose={() => setDrawerVisible(false)}
          visible={drawerVisible}
          bodyStyle={{ padding: 0 }}
        >
          <div className="p-4">
            <ul className="space-y-6">
              {prevVideos.map((video) => (
                <li
                  key={video._id}
                  className="cursor-pointer text-xl text-blue-600 hover:text-blue-800 transition-all duration-300"
                  onClick={() => handleVideoClick(video.link)}
                >
                  <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition-all duration-300">
                    {video.topic}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Drawer>

        {/* Mobile Menu Button */}
        <Button
          className="fixed top-4 right-4 md:hidden z-50"
          type="primary"
          onClick={() => setDrawerVisible(!drawerVisible)}
        >
          Menu
        </Button>
      </div>
    </UserLayout>
  );
};

export default LiveTraining;
