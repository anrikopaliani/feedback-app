import React from "react";
import Card from "../shared/Card";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>
          This is a React app to leave a feedback for a product or a service
        </p>
        <Link to="/">Back to home</Link>
      </div>
    </Card>
  );
};

export default AboutPage;
