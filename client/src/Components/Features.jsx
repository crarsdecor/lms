import React from "react";
import { Card, Col, Row } from "antd";
import "./FeaturesSection.css";

const features = [
  {
    title: "Comprehensive Curriculum",
    description: "Learn everything you need to start dropshipping.",
  },
  {
    title: "Expert Instructors",
    description: "Courses by industry professionals.",
  },
  {
    title: "Interactive Learning",
    description: "Engage with content and apply skills.",
  },
  {
    title: "Flexible Pricing",
    description: "Plans that suit every budget with Learning",
  },
];

const FeaturesSection = () => (
  <div className="features-section">
    <h2>Why Choose Our LMS?</h2>
    <Row gutter={[16, 16]}>
      {features.map((feature, index) => (
        <Col
          key={index}
          xs={24} // For small screens, take up full width
          sm={12} // For small screens and above, take up half width
          md={8} // For medium screens and above, take up one-third width
          lg={6} // For large screens and above, take up one-fourth width
        >
          <Card title={feature.title} bordered={false} className="feature-card">
            {feature.description}
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default FeaturesSection;
