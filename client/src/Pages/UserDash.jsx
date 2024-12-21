import React, { useState, useEffect } from "react";
import { Layout, Typography, message, Card, Col, Row, Skeleton } from "antd";
import UserLayout from "../Layouts/UserLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const backendUrl = process.env.REACT_APP_BACKEND_URL;
const { Text } = Typography;
const { Content } = Layout;

const UserDash = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [amazon, setAmazon] = useState(null);
  const [website, setWebsite] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const amazonId = localStorage.getItem("enrollmentIdAmazon");
  const websiteId = localStorage.getItem("enrollmentIdWebsite");

  useEffect(() => {
    const uid = localStorage.getItem("uid");

    if (!uid) {
      setError("User ID not found in localStorage.");
      setLoading(false);
      return;
    }

    const fetchAmazon = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          message.error("Authentication token missing.");
          return;
        }

        const response = await axios.get(`${backendUrl}/user/getAmazon`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAmazon(response.data.amazon);
      } catch (error) {
        message.error("Failed to fetch courses. Please try again.");
      }
    };

    const fetchWebsite = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          message.error("Authentication token missing.");
          return;
        }

        const response = await axios.get(`${backendUrl}/user/getWebsite`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setWebsite(response.data.website);
      } catch (error) {
        message.error("Failed to fetch courses. Please try again.");
      }
    };

    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`${backendUrl}/user/${uid}`);
        if (response.data && response.data.user && response.data.user.length) {
          setUser(response.data.user[0]);
        } else {
          setError("Unexpected data format received.");
        }
      } catch (err) {
        setError("Error fetching user details. Please try again.");
        message.error("Error loading user details.");
      } finally {
        setLoading(false);
      }
    };

    fetchWebsite();
    fetchAmazon();
    fetchUserDetails();
    AOS.init({
      duration: 1200,
      once: false,
    });
    AOS.refresh();
  }, []);

  const handleWebsiteClick = () => {
    if (websiteId) {
      navigate("/website");
    } else {
      message.error("You are not enrolled yet!");
    }
  };

  const handleAmazonClick = () => {
    if (amazonId) {
      navigate("/amazon");
    } else {
      message.error("You are not enrolled yet!");
    }
  };

  if (loading) {
    return (
      <UserLayout>
        <div className="p-4 space-y-6">
          <div className="flex items-center">
            <Skeleton.Avatar active size="large" />
            <Skeleton.Input active style={{ width: 200 }} />
          </div>
          <Skeleton paragraph={{ rows: 4 }} active />
        </div>
      </UserLayout>
    );
  }

  if (error) {
    return (
      <UserLayout>
        <Content className="text-center mt-10">
          <Text type="danger">{error}</Text>
        </Content>
      </UserLayout>
    );
  }

  if (!user) {
    return (
      <UserLayout>
        <Content className="text-center mt-10">
          <Text>No user details available.</Text>
        </Content>
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      <div className="p-4 space-y-6">
        {/* Combined Amazon and Website Courses Section in a single Row */}
        <Row gutter={[16, 16]} justify="center">
          {/* Amazon Courses Section */}
          {amazon &&
            amazon.length > 0 &&
            amazon.map((course) => (
              <Col
                onClick={handleAmazonClick}
                key={course._id}
                xs={24}
                sm={12}
                lg={8}
                xl={6}
              >
                <Card
                  hoverable
                  cover={<img alt={course.title} src={course.image} />}
                  data-aos="fade-up"
                  className="bg-white shadow-lg h-full"
                >
                  <Card.Meta
                    title={course.title}
                    description={<Text>{course.description}</Text>}
                  />
                  <div className="mt-4 text-sm text-gray-500">
                    <ul className="list-disc pl-5">
                      <li>{course.bullet1}</li>
                      <li>{course.bullet2}</li>
                      <li>{course.bullet3}</li>
                      <li>{course.bullet4}</li>
                    </ul>
                  </div>
                </Card>
              </Col>
            ))}

          {/* Website Courses Section */}
          {website &&
            website.length > 0 &&
            website.map((course) => (
              <Col
                onClick={handleWebsiteClick}
                key={course._id}
                xs={24}
                sm={12}
                lg={8}
                xl={6}
              >
                <Card
                  hoverable
                  cover={<img alt={course.title} src={course.image} />}
                  data-aos="fade-up"
                  className="bg-white shadow-lg h-full"
                >
                  <Card.Meta
                    title={course.title}
                    description={<Text>{course.description}</Text>}
                  />
                  <div className="mt-4 text-sm text-gray-500">
                    <ul className="list-disc pl-5">
                      <li>{course.bullet1}</li>
                      <li>{course.bullet2}</li>
                      <li>{course.bullet3}</li>
                      <li>{course.bullet4}</li>
                    </ul>
                  </div>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </UserLayout>
  );
};

export default UserDash;
