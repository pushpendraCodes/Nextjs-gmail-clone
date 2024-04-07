import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import Mail from "@/components/ui/Mail";
import { Dashboard } from "@/components/ui/Dashboard";

export default function Home() {
  return (
    <main className="navbar h-screen  px-3 py-3">
      <Navbar />
      <Dashboard/>

    </main>
  );
}
