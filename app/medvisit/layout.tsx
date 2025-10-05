"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Loader from "@/components/ui/loader";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import {
  Calendar1Icon,
  CalendarClockIcon,
  CalendarCheck2,
  HomeIcon,
  
} from "lucide-react";

export default function Home({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const pathname = usePathname();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [router, status]);

  if (status === "loading") {
    return <Loader />;
  }
  if (!session) {
    return null;
  }

  return (
    <div>
      <div className="flex items-center gap-1 border-b z-10 fixed top-0  w-[100%] bg-white  justify-between p-3">
        <div className="flex items-center gap-1">
          <Image src={logo} height={20} width={30} alt="logo" />
          <p className="text-[1rem] max-md:font-[550] font-[500] text-zinc-800">MedVisit</p>
        </div>
        <Button
          onClick={() => {
            router.push("/medvisit/appointment");
          }}
          variant={"outline"}
          className="shadow-none hover:cursor-pointer border-1 max-md:text-sm max-md:font-semibold border-gray-100"
        >
          Book Appointment
        </Button>
      </div>
      <div className="grid grid-cols-[20%_80%] max-md:h-[100%] max-md:grid-cols-1 max-md:grid-rows-[95%_5%]  relative">
        <div className="max-md:hidden">
          <motion.div
            initial={{
              x: -20,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
            }}
            className=" bg-white    h-[100vh] w-[20%]   left-0 top-12 fixed z-2  border-r-1  border-gray-200/90   "
          >
            <div
              className=" p-2  pt-8 space-y-1  
        
        "
            >
              <motion.div
                className="mb-3"
                initial={{
                  x: -25,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.6,
                }}
                onClick={() => {
                  router.push("/medvisit/appointment");
                }}
              >
                <NavItem
                  icon={<Calendar1Icon size={16} />}
                  label="Book Appoitment "
                  active={pathname.includes('appointment')?true:false}
                />
              </motion.div>

              <motion.div
                className="mb-1"
                initial={{
                  x: -25,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.6,
                }}
                onClick={() => {
                  router.push("/medvisit/upcomming");
                }}
              >
                <NavItem
                  icon={<CalendarClockIcon size={16} />}
                  label="Upcomming Appoitment "
                  active={pathname.includes('upcomming')?true:false}
                />
              </motion.div>
              <motion.div
                initial={{
                  x: -25,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 1,
                }}
                onClick={() => {
                  router.push("/medvisit/completed");
                }}
                className=""
              >
                <NavItem
                  icon={<CalendarCheck2 size={16} />}
                  label="Completed Appoitnent"
                  active={pathname.includes('completed')?true:false}
                />
              </motion.div>

              <motion.div
                initial={{
                  x: -25,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 1.25,
                }}
                className="mt-4 border-t border-zinc-100"
                onClick={() => {
                  router.push("/contact");
                }}
              >
                <div className="mt-2">
                  <NavItem
                    icon={<Calendar1Icon size={16} />}
                    label="Contact Us "
                  />
                </div>
              </motion.div>

              <div
                className={`flex items-end hover:cursor-pointer relative   `}
              >
                <motion.div
                  initial={{
                    y: 25,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 1.3,
                  }}
                  className="flex items-center w-[18%] fixed bottom-3  gap-3 hover:bg-primary/10 rounded-md hover:cursor-pointer py-2 px-1"
                  onClick={() => {}}
                >
                  <div>
                    {/* <Image
                        src={String(session.user?.image)}
                        width={35}
                        height={20}
                        alt="user"
                        className="rounded-full"
                      /> */}
                  </div>
                  <div>
                    <p className="text-md text-neutral-800 font-medium">
                      {session.user?.name}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-15">{children}</div>
        {/* //mobile div */}
        <div className="z-10 md:hidden bg-gray-100 fixed bottom-0 w-[100%]  flex justify-between">
      <div className="flex w-[100%] justify-between items-center">
        <button onClick={()=>{
          router.push('/medvisit/appointment')
        }} className={`${pathname.includes('appointment')? 'flex border-b-2 text-gray-900 border-gray-900 flex-col items-center gap-1.5 py-4 px-4 group w-full':'flex flex-col items-center gap-1.5 py-4 px-4 group w-full'}`}>

          <HomeIcon className="w-5 h-5 text-gray-900 group-hover:text-gray-900 transition-colors"/>
          <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
            Home
          </span>
        </button>

        <button onClick={()=>{
          router.push('/medvisit/upcomming')
        }} className={`${pathname.includes('completed') || pathname.includes('upcomming') ? 'flex flex-col items-center gap-1.5 py-4 px-4 group 0 w-full border-b-2 border-gray-900':'flex flex-col items-center gap-1.5 py-4 px-4 group 0 w-full'}`}>
          <Calendar1Icon className="w-5 h-5 text-gray-900" />
          <span className="text-xs font-medium text-gray-900">
            Your Appointments
          </span>
        </button>
      </div>
   
          
        </div>
      </div>
    </div>
  );
}

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <motion.button
      className={[
        "w-full rounded-xl px-3 py-2 text-left text-sm font-medium",
        "flex items-center gap-2 transition-discrete duration-300   ease-out ",
        active
          ? "bg-zinc-950 text-white shadow-sm"
          : "text-zinc-700 hover:bg-zinc-100 hover:cursor-pointer text-2xl hover:text-zinc-950",
      ].join(" ")}
    >
      <span className={active ? "text-white" : "text-zinc-500"}>{icon}</span>
      <span className="text-[0.9rem] max-md:text-red-50">{label}</span>
    </motion.button>
  );
}
