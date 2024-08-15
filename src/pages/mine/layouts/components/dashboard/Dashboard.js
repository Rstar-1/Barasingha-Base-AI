import React from "react";
import TopSection from "./components/TopSection";
import EventCard from "./components/EventCard";

const Dashboard = () => {
  return (
    <div className="mtpx16 px12 dash-h">
      <div className="dash flex md-flex sm-block gap-6">
        <div className="w-70 md-w-60 sm-w-full">
          <EventCard />
        </div>
        <div className="w-30 md-w-40 sm-w-full mlpx10 md-mlpx1 sm-mlpx1">
          <TopSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
