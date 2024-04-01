import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import Mail from "@/components/ui/Mail";
import { Dashboard } from "@/components/ui/Dashboard";

export default function Home() {
  return (
    <main className="navbar max-h-screen  px-3 py-3">
      <Navbar />
      <Dashboard/>
      {/* <div className="main flex gap-5 mt-4 items-center  ">
        <div className="sidebar w-1/5">
          <Sidebar />
        </div>
        <div className="mail-section  w-4/5">
          <Mail />
        </div>
      </div> */}
    </main>
  );
}
