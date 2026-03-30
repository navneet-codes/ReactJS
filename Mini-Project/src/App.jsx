import React from "react";
import Card from "./components/Card.jsx";

import "./App.css";

const App = () => {
  const jobs = [
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      nameOfCompany: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 42,
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      nameOfCompany: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 78,
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png",
      nameOfCompany: "Meta",
      datePosted: "10 days ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: 38,
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      nameOfCompany: "Amazon",
      datePosted: "1 week ago",
      post: "Backend Engineer (Node.js)",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 55,
      location: "Chennai, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      nameOfCompany: "Netflix",
      datePosted: "3 days ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 85,
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      nameOfCompany: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 60,
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
      nameOfCompany: "Tesla",
      datePosted: "6 days ago",
      post: "Frontend Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: 45,
      location: "Delhi, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
      nameOfCompany: "Airbnb",
      datePosted: "9 days ago",
      post: "React Native Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 52,
      location: "Kolkata, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
      nameOfCompany: "Uber",
      datePosted: "2 days ago",
      post: "Frontend Performance Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 70,
      location: "Ahmedabad, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
      nameOfCompany: "Spotify",
      datePosted: "3 weeks ago",
      post: "Web Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: 40,
      location: "Jaipur, India",
    },
  ];
  return (
    <div className="parent">
      {jobs.map((element) => {
        return (
          <Card
            key={element.nameOfCompany}
            image={element.brandLogo}
            name={element.nameOfCompany}
            datePosted={element.datePosted}
            post={element.post}
            tag1={element.tag1}
            tag2={element.tag2}
            pay={element.pay * 5}
            location={element.location}
          />
        );
      })}
    </div>
  );
};

export default App;
