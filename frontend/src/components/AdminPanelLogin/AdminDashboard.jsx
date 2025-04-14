import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import Sidebar from "./Sidebar";
import DashboardHome from "./DashboardHome";
import AdminHeader from "./AdminHeader";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        {/* Responsive Header */}
        <AdminHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          {/* 
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students" element={<Students />} />
          <Route path="/assessments" element={<Assessments />} />
          */}
        </Routes>
      </main>
    </div>
  );
}