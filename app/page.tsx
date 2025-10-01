import Image from "next/image";
import logo from "../public/logo.png";
import { Ambulance, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { StethoscopeIcon } from "lucide-react";
import { HeartPlusIcon } from "lucide-react";
import { PillBottle } from "lucide-react";
import LatestVisitedDoctor from "@/components/ui/lastVisttedDoc";
import ServiceCard from "@/components/ui/showService";
import TotoalAppointment from "@/components/ui/paintentBook";
import WorkingProcess from "@/components/ui/ workingprocess";
export default function Home() {
  return (
    <div className="p-4">
      <header>
        <nav className="grid grid-cols-[10%_80%_10%] ">
          <div className="flex items-center gap-2">
            <Image src={logo} height={30} width={35} alt="logo" />
            <p className="text-[1.2rem] font-[500] text-gray-900">MedVisit</p>
          </div>
          <div>
            <ul className="flex text-[1rem] font-[400] gap-10 items-center mt-2 w-full justify-center ">
              <li>Home</li>
              <li>About us</li>
              <li>Service</li>
            </ul>
          </div>
          <div className="text-end">
            <Button variant={"outline"}>Contact</Button>
          </div>
        </nav>
      </header>
      <div className=" bg-neutral-50 rounded-2xl m-5 h-[100vh]  grid grid-cols-[15%_70%_15%]">
        <div className="w-full">
          <div className="border-dashed h-100 w-40  border-zinc-900/10 border-r-2 border-b-2 rounded-br-2xl ">
          
          </div>
          <div className=" h-80 absolute top-94 w-50   border-zinc-900/10 border-r-2 border-t-2 rounded-tr-2xl ">
          
          <div className="absolute -top-5  right-4">
          <Icon
         children={<Ambulance/>}
          />
          </div>

           <div className="absolute top-43 left-10 ">
          <LatestVisitedDoctor/>
          </div>
          </div>
          
        </div>
        <div className="flex relative item-center justify-center w-[100%] flex-col">
           <div className="absolute top-30  left-20">
          <Icon
         children={<HeartPlusIcon/>}
          />
          </div>
           <div className="absolute top-30  right-20">
          <Icon
         children={<Pill/>}
          />
          </div>
          <div className="text-center">
          <h1 className="text-7xl mb-2 ">Skip the calls</h1>
          <h1 className="text-7xl">Book care online</h1>
          </div>
          <div className="text-center mt-5 text-gray-500  flex justify-center ">
            <p className="w-[80%] text-lg">Healthcare that fits the schedule. View real‑time slots from trusted local docktors, lock in a visit in a few clicks</p></div>
            <div className="text-center mt-7">
            <Button className="w-fit bg-indigo-600 px-10 py-5 text-md hover:bg-indigo-800 hover:cursor-pointer hover:">Book Appointment</Button>
            </div>
            <div className="flex justify-center absolute bottom-0 items-center w-full">
              <div >
              <TotoalAppointment/>
              </div>
            </div>
        </div>
        
        <div className="w-full">
          <div className=" h-100 w-45  border-zinc-900/10 border-l-2 border-b-2 rounded-bl-2xl "></div>
          <div className=" h-80 absolute right-10  top-95 w-60  border-dashed   border-zinc-900/10 border-l-2 border-t-2 rounded-tl-2xl ">
            <div className="absolute -top-5  left-10">
          <Icon
         children={<StethoscopeIcon/>}
          />
          </div>
            <div className="absolute  -bottom-10  -left-20   ">
         <ServiceCard/>
          </div>
           
          </div>
        </div>
      </div>
      {/* //sedonvb */}
    <WorkingProcess/>
    </div>
  );
}

