import React from "react";
import TopSection from "./components/TopSection";
import EventCard from "./components/EventCard";

const Dashboard = () => {
  return (
    <div className="mtpx16 px12 dash-h">
      <div className="dash flex gap-6">
        <div className="w-70">
          <EventCard />
        </div>
        <div className="w-30 mlpx10">
          <TopSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
