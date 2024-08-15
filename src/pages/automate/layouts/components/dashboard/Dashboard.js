import React from "react";
import TopSection from "./components/TopSection";
import EventCard from "./components/EventCard";

const Dashboard = () => {
  return (
    <div className="mtpx12 dash-h w-full">
      <TopSection />
      <EventCard />
    </div>
  );
};

export default Dashboard;
