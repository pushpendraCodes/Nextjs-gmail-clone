"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import { RedirectStatusCode } from "next/dist/client/components/redirect-status-code";

export function LoginForm() {
  const { status } = useSession();
  console.log(status, "de");
  const router = useRouter();
  const { toast } = useToast();

  const signInWithGoogle = async (type: string) => {
    await signIn(type);
    // No need to navigate here, wait for useEffect to handle it
  };

  const navigateToDashboard = () => {
    if (status === "authenticated") {
      router.push("/dashboard");
      setTimeout(():void => {
        toast({
          title: "Login",
          description: "Successfully loged in",
        });
      }, 2000)
    }
  };

  useEffect(() => {
    navigateToDashboard();
  }, [status]);
  return (
    <>
      <Card className="w-full max-w-sm ">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>

        <CardFooter>
          <Button
            onClick={() => signInWithGoogle("google")}
            className="w-full flex gap-2 items-center hover:bg-[#1b5a72]  ">
            Sign in with Google
            <Image
              alt="google image"
              width={20}
              height={20}
              src="/google.png"
            />
          </Button>
        </CardFooter>
        <CardFooter>
          <Button
            onClick={() => signInWithGoogle("github")}
            className="w-full flex gap-2 items-center  bg-[#1b5a72]">
            Sign in with Github
            <Image
              alt="github image"
              width={20}
              height={20}
              src="/resource.png"
            />
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
