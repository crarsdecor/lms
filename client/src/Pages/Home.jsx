import { React, useEffect } from "react";
import { Button } from "antd";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import FAQSection from "./Faq";
import TestimonialsSection from "./Testimonial";
import UserNavbar from "../Components/UserNavbar";
import FeaturesSection from "../Components/Features";

const Home = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleAppointmentClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/book-appointment");
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
    AOS.refresh();
    if (role === "user") {
      navigate("/userdash");
    } else if (role === "manager") {
      navigate("/managerdash");
    } else if (role === "admin") {
      navigate("/admindash");
    } else if (role === "supervisor") {
      navigate("/supervisordash");
    }
  }, [role]);
  return (
    <div className="mt-8">
      {/* <Navbar /> */}
      <UserNavbar />
      <div
        className="flex flex-col lg:flex-row items-center justify-between mb-10"
        style={{
          backgroundImage: "url('/banner9.jpg')", // Background image URL
          backgroundSize: "cover", // Cover the entire container
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent the image from repeating
          height: "90vh", // Make the height fill the entire viewport height
          width: "100%", // Make the width fill the entire viewport width
          marginTop: "60px",
        }}
      >
        <div className="relative top-32 left-6">
          <Button
            onClick={() => {
              navigate("/login");
            }}
            className="font-bold"
            type="primary"
          >
            Start Now
          </Button>
        </div>
        {/* <div data-aos="zoom-in" className="w-full lg:w-1/2 mt-20">
          <img
            src="/banner2.png"
            alt="Logo"
            className="w-full h-auto object-cover hidden lg:block animate-bounceUpDown"
          />
          <img
            src="/banner2.png"
            alt="Logo"
            className="w-full h-auto object-cover block lg:hidden animate-bounceUpDown"
          />
        </div> */}
        {/* <div className="w-full lg:w-1/2 mt-4 lg:mt-0 text-center lg:text-left">
          <h1
            className="text-3xl font-bold mb-4"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 255, 0.8), rgba(255, 0, 0, 0.8))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Welcome to Our Premium LMS
          </h1>

          <p className="text-base text-black-900 mb-6">
            Welcome to the Crarts Decor Support Portal! Designed to streamline
            your experience, our portal empowers users to raise tickets for any
            concerns or queries and book appointments with their designated
            managers effortlessly. Whether you need assistance with Amazon
            product listings or e-commerce website development, our dedicated
            team is here to provide you with personalized support and ensure
            your projects stay on track.
          </p>
          <Button
            onClick={handleAppointmentClick}
            type="primary"
            className="bg-gradient-to-r from-blue-800 to-blue-400 hover:from-blue-700 hover:to-blue-500 font-bold shadow-lg hover:shadow-xl my-4"
          >
            Start Learning
          </Button>
        </div> */}
      </div>
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />

      <Footer />
    </div>
  );
};

export default Home;
