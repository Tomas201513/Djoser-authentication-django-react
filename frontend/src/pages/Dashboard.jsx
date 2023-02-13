import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/elements/Header";
import Sidebar from "../components/elements/Sidebar";

const Dashboard = () => {
  return (
    <>
      <main className="flex min-h-screen bg-gray-100 min-w-screen">
        <Sidebar />
        <section className="flex-1">
          <Header />
          <section>
            <Outlet />
          </section>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
