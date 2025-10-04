"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Image from "next/image";
import logo from "../../public/logo.png"
import Loader from "@/components/ui/loader";
import { Button } from "@/components/ui/button";
export default function Home({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [router, status]);

  if (status === "loading") {
    return <Loader/>
  }
  if (!session) {
    return null;
  }

  return (
    <div>
      <div className="flex items-center gap-1  w-[100%] bg-white shadow justify-between p-3">
        <div className="flex items-center gap-1">

            <Image src={logo} height={20} width={30} alt="logo" />
            <p className="text-[1rem] font-[500] text-gray-900">MedVisit</p>
        </div>
         <Button  variant={"outline"} className="shadow-none hover:cursor-pointer border-1 border-gray-100">Book Appointment</Button>
          </div>
      {children}
    </div>
  );
}
