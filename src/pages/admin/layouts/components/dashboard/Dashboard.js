import React from "react";
import TopSection from "./components/TopSection";
import EventCard from "./components/EventCard";

const Dashboard = () => {
  return (
    <div className="mtpx16 dash-h">
      <TopSection />
      <EventCard />
    </div>
  );
};

export default Dashboard;
