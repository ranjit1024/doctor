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
import BookAppointmentButton from "@/components/ui/work1";

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
      <div className=" bg-neutral-50 rounded-2xl m-5 h-[110vh]  grid grid-cols-[15%_70%_15%]">
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
            <Button className="w-fit bg-indigo-600 px-7 py-6 text-md hover:bg-indigo-800 hover:cursor-pointer hover:">Book Appointment</Button>
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
    <div className="mt-20 p-2 ">
       <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-900">
        Working Process
      </h2>
      <div className="w-[100%]  grid grid-cols[40%_20%_40%]">
        <div className="flex flex-col gap-20 h-full">
        <div className="flex items-start relative ">
          <div className="z-10">

       <BookAppointmentButton />
          </div>
       <div className="absolute top-6 left-74 ">
       <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 306 94" width="306" height="94"><metadata></metadata><defs><style className="style-fonts">
      </style></defs><rect x="0" y="0" width="306" height="94" fill="#ffffff" fillOpacity={0}></rect><g stroke-linecap="round"><g transform="translate(10 10) rotate(0 143 37)"><path d="M0 0 C35.57 0, 71.14 0, 127 0 M0 0 C33.12 0, 66.24 0, 127 0 M127 0 C137.67 0, 143 5.33, 143 16 M127 0 C137.67 0, 143 5.33, 143 16 M143 16 C143 32.71, 143 49.42, 143 58 M143 16 C143 28.33, 143 40.65, 143 58 M143 58 C143 68.67, 148.33 74, 159 74 M143 58 C143 68.67, 148.33 74, 159 74 M159 74 C205.93 74, 252.86 74, 286 74 M159 74 C205.19 74, 251.39 74, 286 74" stroke="#1e1e1e" strokeOpacity={0.2} stroke-width="2" fill="none"></path></g></g><mask></mask></svg>
      </div>
      </div>
        <div className="flex items-start relative ">
          <div className="z-10">

       <BookAppointmentButton/>
          </div>
       <div className="absolute -top-14 left-75 ">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 306 94" width="306" height="94"><metadata></metadata><defs><style className="style-fonts">
      </style></defs><rect x="0" y="0" width="306" height="94" fill="#ffffff" fillOpacity={0}></rect><g stroke-linecap="round"><g transform="translate(10 84) rotate(0 143 -37)"><path strokeOpacity={0.2} d="M0 0 C35.57 0, 71.14 0, 127 0 M0 0 C33.12 0, 66.24 0, 127 0 M127 0 C137.67 0, 143 -5.33, 143 -16 M127 0 C137.67 0, 143 -5.33, 143 -16 M143 -16 C143 -32.71, 143 -49.42, 143 -58 M143 -16 C143 -28.33, 143 -40.65, 143 -58 M143 -58 C143 -68.67, 148.33 -74, 159 -74 M143 -58 C143 -68.67, 148.33 -74, 159 -74 M159 -74 C205.93 -74, 252.86 -74, 286 -74 M159 -74 C205.19 -74, 251.39 -74, 286 -74" stroke="#1e1e1e" stroke-width="2"  fill="none"></path></g></g><mask></mask></svg>
      </div>
      </div>
      </div>
        </div>
    </div>
    </div>
  );
}

