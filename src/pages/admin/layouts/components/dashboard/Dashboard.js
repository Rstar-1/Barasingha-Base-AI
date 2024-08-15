import React from "react";
import TopSection from "./components/TopSection";
import EventCard from "./components/EventCard";

const Dashboard = () => {
  return (
    <div className="flex w-full dash mtpx12">
      <div className="w-60">
        <TopSection />
      </div>
      <div className="w-40 plpx12">
        <EventCard />
      </div>
    </div>
  );
};

export default Dashboard;
