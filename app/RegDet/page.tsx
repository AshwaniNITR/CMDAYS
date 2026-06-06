"use client";
import { useState } from "react";
import { CommitteesBackground } from "../../components/Background";
import FeesPage from "../../components/Registration";
import OtherBackground from "../../components/OtherBackground";
const Page = () => {


  return (
    <div className="relative min-h-screen">
      {/* <Navbar /> */}
      <div className="fixed inset-0 z-0">
    <OtherBackground />
  </div>
  <div className="relative z-10">
    <FeesPage />
  </div>
     
    </div>
  );
};

export default Page;
