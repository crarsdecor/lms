import React, { useEffect, useState } from "react";
import { Card, Button, message, Radio, Space } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserLayout from "../Layouts/UserLayout";
import AOS from "aos";
import "aos/dist/aos.css";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const LiveTraining = () => {
  const [prevVideos, setPrevVideos] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [selectedTab, setSelectedTab] = useState("previous");
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800, // Animation duration in ms
      once: true, // Animation happens only once
    });
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${backendUrl}/admin/getprevvideo`);
      setPrevVideos(response.data.videos);
    } catch (error) {
      message.error("Failed to fetch previous videos.");
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

  const handlePlayVideo = (video) => {
    navigate(`/video-player`, { state: { video } });
  };

  return (
    <UserLayout>
      <div className="p-4">
        {/* Radio Buttons for Switching Views */}
        <Radio.Group
          value={selectedTab}
          onChange={(e) => setSelectedTab(e.target.value)}
          className="mb-6"
        >
          <Radio.Button value="previous">Previous Trainings</Radio.Button>
          <Radio.Button value="upcoming">Upcoming Trainings</Radio.Button>
        </Radio.Group>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectedTab === "previous" &&
            prevVideos.map((video, index) => (
              <Card
                key={video._id}
                hoverable
                className="shadow-lg rounded-lg border border-gray-200 bg-white"
                cover={
                  <img
                    alt={video.topic}
                    src="https://via.placeholder.com/400"
                    className="h-40 object-cover w-full rounded-t-lg"
                  />
                }
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`} // Adding delay for staggered animation
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {video.topic}
                </h3>
                <Button
                  type="primary"
                  block
                  onClick={() => handlePlayVideo(video.link)}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                >
                  Play Now
                </Button>
              </Card>
            ))}

          {selectedTab === "upcoming" &&
            trainings.map((training, index) => (
              <Card
                key={training._id}
                hoverable
                className="shadow-lg rounded-lg border border-gray-200 bg-white"
                cover={
                  <img
                    alt={training.topic}
                    src="https://thumbs.dreamstime.com/b/upcoming-banner-template-ribbon-label-sign-sticker-195330724.jpg"
                    className="h-40 object-cover w-full rounded-t-lg"
                  />
                }
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`} // Adding delay for staggered animation
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {training.topic}
                </h3>
                <p className="text-gray-600 mb-4">{training.description}</p>
                <p className="text-sm text-gray-500 mb-2">
                  Date:{" "}
                  {training.date
                    ? new Date(training.date).toLocaleDateString("en-GB")
                    : "TBA"}
                </p>
                <p className="text-sm text-gray-500">
                  Time: {training.time || "TBA"}
                </p>
                <Button
                  type="primary"
                  href={training.link}
                  target="_blank"
                  block
                  className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600"
                >
                  Join Now
                </Button>
              </Card>
            ))}
        </div>
      </div>
    </UserLayout>
  );
};

export default LiveTraining;
