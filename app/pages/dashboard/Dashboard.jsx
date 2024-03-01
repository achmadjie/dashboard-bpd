// "use client";

import React from "react";
import DashboardContent from "@/app/components/dashboard-content/DashboardContent";
import CarouselItem from "@/app/components/carousel/CarouselItem";
import TableListLinmas from "@/app/components/table-list-linmas/TableListLinmas";

function Dashboard() {
  return (
    <>
      <DashboardContent />
      <CarouselItem />
      <TableListLinmas />
    </>
  );
}

export default Dashboard;
