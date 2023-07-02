import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";
function Home() {
  let history = useHistory();
  return (
    <div>
      <h1>Exercise Guru Hub</h1>
      <p>
        Welcome to our fitness hub, your ultimate resource for exercise
        inspiration and guidance. Whether you're a seasoned athlete or a
        beginner, we're here to help you achieve your health and wellness goals.
        Discover expert tips, step-by-step instructions, and engaging articles
        covering a variety of exercise modalities. Join our vibrant community of
        like-minded individuals and find support, inspiration, and challenges
        along the way. Unlock your full potential and transform your life
        through exercise. Start your journey to a stronger, fitter, and
        healthier you right here. Let's sweat, smile, and succeed together!
      </p>
      <div id="wrapper">
        {/* if the user is logged in clicking get started now will take the user to register else if they are logged in take straight to exercises  */}
        <button
          className="home-button"
          onClick={() => {
            history.push("/register");
          }}
        >
          Get started now!
        </button>
      </div>
    </div>
  );
}

export default Home;
