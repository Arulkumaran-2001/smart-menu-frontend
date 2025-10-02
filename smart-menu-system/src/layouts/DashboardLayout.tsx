import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Topbar from '../components/topbar/Topbar';

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <section className="flex h-screen w-full bg-gray-100">
      <Sidebar />
      <section className="flex flex-col flex-1">
        <Topbar />
        <section className="p-6 overflow-auto">{children}</section>
      </section>
    </section>
    </>
  )
}
export default DashboardLayout;