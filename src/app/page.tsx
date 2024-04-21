import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import Mail from "@/components/ui/Mail";
import { LoginForm } from "@/components/ui/LoginPage";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <LoginForm />
    </div>
  );
}
