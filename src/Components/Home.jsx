import React from "react";
import NavBar from "./NavBar";
import SignInForm from "./SignInForm";

const Home = () => {
  return (
    <>
      <NavBar />
      {/* <div className="contact__title">Ravi Teja Chilaka</div>
      <div className="contact__summary">
        A self-learner and hardworking computer Network enthusiast familiar with
        routing protocols, voice applications and network switching. Efficient
        at working independently or as part of supportive team. Extensive
        theoretical and practical knowledge in networking related tools and in a
        position to deploy LAN&WAN architecture. Competent at resolving complex
        IT issues. Experienced in customer service with a strong passion in many
        areas of technology, is keen to practically apply extensive knowledge in
        an IT support position. Currently I have completed my master’s in
        Advanced Computer Networks and wants to explore my skills in IT sector
        and have unrestricted work in UK.{" "}
      </div> */}
      <SignInForm />
    </>
  );
};

export default Home;
