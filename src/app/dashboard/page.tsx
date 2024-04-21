
"use client"
import ListingPage from "@/components/ui/ListingPage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function dashboard() {
  const data = useSession();
  const router = useRouter();
  console.log(data, "data");
  if (data.status !== "authenticated") {
    return router.push("/");
  }

  return (
    <>
      <ListingPage />
    </>
  );
}
