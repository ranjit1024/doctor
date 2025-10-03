"use client";
import Image from "next/image";
import logo from "../public/filalogo.png";
import { Ambulance, MoreHorizontal, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { StethoscopeIcon } from "lucide-react";
import { HeartPlusIcon } from "lucide-react";
import { motion } from "framer-motion";
import LatestVisitedDoctor from "@/components/ui/lastVisttedDoc";
import ServiceCard from "@/components/ui/showService";
import TotoalAppointment from "@/components/ui/paintentBook";
import BookAppointmentButton from "@/components/ui/work1";
import DoctorCard from "@/components/ui/chossUpCard";
import AppointmentBanner from "@/components/ui/banner";
import MobileAppointmentBanner from "@/components/ui/Mbanner";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";
export default function App(){
  const isMobile = useMediaQuery({maxWidth:768});
  return isMobile ? <Mobile/>:<DeskTop/>
}
function Mobile(){
  const router = useRouter()
  return  <div className="p-3">
      <header className="bg-white flex   top-5 w-[99%] max-md:w-[95%]    z-10  items-center justify-between gap-2  rounded-2xl px-4 py-2 shadow-blue-200 shadow backdrop-blur-md" >
        <div className="flex items-center gap-2">
            <Image src={logo} height={20} width={30} alt="logo" />
            <p className="text-[1.1rem] pt-1 font-[500] text-gray-900">MedVisit</p>
          </div>
      </header>
      <div className="h-[75vh]  w-[100%] mt-20">
         <motion.div
             initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
 
          className="space-y-4  ">
          <div className="text-start font-medium text-[3.7rem] space-y-2">
           
            <h1 className=" leading-18 "> Skip the</h1>
            <p className="leading-16">Calls Book </p>
            <p className="leading-16">Care online </p>
          </div>
          <div className="text-start  text-gray-500  flex justify-center mt-5 ">
            <p className="w-[100%] text-lg">
              Healthcare that fits the schedule. View real‑time slots from
              trusted local docktors, lock in a visit in a few clicks
            </p>
          </div>
          <div className="text-start mt-7">
            <Button onClick={()=>{router.push('/auth/signin')}} className="w-fit bg-indigo-600 px-7 py-6 text-md hover:bg-indigo-800 hover:cursor-pointer hover:">
              Book Appointment
            </Button>
          </div>
          </motion.div>
          
      </div>
      <div className="grid grid-cols-2 relative">
        <div className="flex flex-col gap-4">
          <motion.div 
          initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
          >
        <LatestVisitedDoctor/>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
          >
        <TotoalAppointment/>
          </motion.div>
        </div>
        <div className="pl-3 pt-3 pb-3 bg-transparent relative ">
          <div className=" bg-transparent border-2 rounded-tl-2xl rounded-bl-2xl -z-1 h-[90%] absolute top-5 w-[100%]">
               <motion.div 
            initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
          className="absolute top-30  left-25">
            <Icon>
              <HeartPlusIcon />
            </Icon>
          </motion.div>
               <motion.div 
              initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
          className="absolute -bottom-2  left-25">
            <Icon>
              <StethoscopeIcon />
            </Icon>
          </motion.div>

          </div>
        </div>
      </div>
      <div className="mt-25">
        <h2 className="text-3xl md:text-4xl font-semibold text-center  text-gray-900">
          Working Process
        </h2>
        <div className="grid grid-cols-[100%] w-[100%] h-[100%] mt-10 p-2">
         
        <div className="flex gap-10 flex-col relative w-[100%]">
          <div className="absolute w-[100%] h-[100%] flex justify-center">
            <motion.div
            initial={{ opacity: 0, scale:0 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut", delay:0.7 }}
  viewport={{ once: true, amount: 0.3 }}
 
            className="w-[2px] rounded-2xl animate-pulse bg-gradient-to-t to-gray-300 from-gray-100 -z-10"></motion.div>
          </div>
            <motion.div
            initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
  className="w-[100%]"
            >

           <BookAppointmentButton
              title="Book Appointment"
              subtitle="shedule online in minutes"
              order={1}
            />
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay:0.1 }}
  viewport={{ once: true, amount: 0.3 }}
  className="w-[100%]"
            >

            <BookAppointmentButton
              title="Consult a Docktor "
              subtitle="Meet with specialists doctor in local "
              order={2}
            />
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay:0.2 }}
  viewport={{ once: true, amount: 0.3 }}
  className="w-[100%]"
            >
              
           <BookAppointmentButton
              title="Diagnosis & Tests"
              subtitle="Get accurate reports "
              order={3}
            />
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay:0.3 }}
  viewport={{ once: true, amount: 0.3 }}
  className="w-[100%]"
            >

            <BookAppointmentButton
              title="Treatment & Follow-up"
              subtitle="Follw-up care and support "
              order={4}
            />
            </motion.div>
        </div>
        </div>
      </div>
      <motion.div 
      initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut",  }}
  viewport={{ once: true, amount: 0.3 }}

      
      className="mt-20">
            <div className="flex justify-center items-start p-2 flex-col w-full ">
              <button className="px-3 py-[0.3rem] rounded-2xl border-1 bg-gradient-to-br from-gray-50/80  to-violet-50  text-gray-900  font-medium">
                Why Choose Us
              </button>
              <div className="mt-6">
                <h1 className="text-[3.2rem]   font-medium">Trusted by </h1>
                <h1 className="text-[3.2rem] -mt-3 w-[100%] font-medium ">
                  Thousands of Patients
                </h1>
              </div>
              <p className="mt-4 font-normal text-gray-600">
                We differentiate ourselves by providing not only exceptional
                treatment but also a comforting, reassuring experience that
                places your well-being at the center of everything we do
              </p>
            </div>
           
      </motion.div>

      <motion.div
      initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", }}
  viewport={{ once: true, amount: 0.3 }}

      className="mt-15 grid ">
        <MobileAppointmentBanner/>
        
      </motion.div>
      <footer className="w-[100%] border-t-1 pt-3  mt-10 flex justify-between ">
        <div className="flex items-center gap-2">
          <Image src={logo} height={40} width={40} alt="logo"></Image>
          <p className="text-lg text-neutral-800 font-medium">MedVisit</p>
        </div>

        <ul className="flex gap-3 text-zinc-700 ">
          <li className="hover:text-violet-600 hover:cursor-pointer">Home</li>
          <li className="hover:text-violet-600 hover:cursor-pointer">
            About us
          </li>
        </ul>
      </footer>
      </div>
}
function DeskTop() {
  const router = useRouter()
  return (
    <div className="p-4">
      <header>
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="grid grid-cols-[10%_80%_10%] "
        >
          <div className="flex items-center gap-2">
            <Image src={logo} height={30} width={35} alt="logo" />
            <p className="text-[1.2rem] font-[500] text-gray-900">MedVisit</p>
          </div>
          <div className="flex items-center w-[100%] justify-center gap-8">
            <motion.div
              className="relative text-lg hover:cursor-pointer text-neutral-900 hover:text-gray-900"
              whileHover="hover"
            >
              Home
              <motion.span
                className="absolute -bottom-1 left-0 h-0.75 bg-violet-600"
                initial={{ width: 0 }}
                variants={{
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              className="relative text-lg  text-neutral-900 hover:text-gray-900 hover:cursor-pointer"
              whileHover="hover"
            >
              About Us
              <motion.span
                className="absolute -bottom-1 left-0 h-0.75 bg-violet-600"
                initial={{ width: 0 }}
                variants={{
                  hover: { width: "100%" },
                }}
              />
            </motion.div>
          </div>
          <div className="text-end">
            <Button onClick={()=>{router.push('/contact')}} variant={"outline"}>Contact</Button>
          </div>
        </motion.nav>
      </header>
      <div className=" bg-neutral-50 rounded-2xl m-5 h-[110vh]  grid grid-cols-[15%_70%_15%]">
        <div className="w-full">
          <div className="border-dashed h-100 w-40  border-zinc-900/10 border-r-2 border-b-2 rounded-br-2xl "></div>
          <div className=" h-80 absolute top-94 w-50   border-zinc-900/10 border-r-2 border-t-2 rounded-tr-2xl ">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute -top-5  right-4"
            >
              <Icon>
                <Ambulance />
              </Icon>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
            className="absolute top-43 left-10 ">
              <LatestVisitedDoctor />
            </motion.div>
          </div>
        </div>
        <div className="flex relative item-center justify-center w-[100%] flex-col">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{
    type: "spring",
    stiffness: 100,
    damping: 20
  }}
          className="absolute top-30  left-20">
            <Icon>
              <HeartPlusIcon />
            </Icon>
          </motion.div>
          <motion.div

           initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{
    type: "spring",
    stiffness: 100,
    damping: 20
  }}
          className="absolute top-30  right-20">
 
            <Icon>
              <Pill />
            </Icon>
          </motion.div>
          <motion.div
           initial={{ y:10, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    type: "spring",
    stiffness: 100,
    damping: 20
  }}
          className="space-y-7 pb-20 ">
          <div className="text-center">
            <h1 className="text-[4.5rem] -mb-5 ">Skip the calls</h1>
            <h1 className="text-[4.5rem] ">Book care online</h1>
          </div>
          <div className="text-center  text-gray-500  flex justify-center ">
            <p className="w-[80%] text-lg">
              Healthcare that fits the schedule. View real‑time slots from
              trusted local docktors, lock in a visit in a few clicks
            </p>
          </div>
          <div className="text-center">
            <Button onClick={()=>{
              router.push('/auth/signin')
            }} className="w-fit bg-indigo-600 px-7 py-6 text-md hover:bg-indigo-800 hover:cursor-pointer hover:">
              Book Appointment
            </Button>
          </div>
          </motion.div>
          <div className="flex justify-center absolute bottom-0 items-center w-full">
            <motion.div
            initial={{ opacity: 0, scale:0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
            className="p-5">
              <TotoalAppointment />
            </motion.div>
          </div>
        </div>

        <div className="w-full">
          <div className=" h-100 w-45  border-zinc-900/10 border-l-2 border-b-2 rounded-bl-2xl "></div>
          <div className=" h-80 absolute right-10  top-95 w-60  border-dashed   border-zinc-900/10 border-l-2 border-t-2 rounded-tl-2xl ">
            <motion.div
             initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{
    type: "spring",
    stiffness: 100,
    damping: 20
  }}
            className="absolute -top-5  left-10">
              <Icon>
                <StethoscopeIcon />
              </Icon>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
            className="absolute  -bottom-10  -left-20   ">
              <ServiceCard />
            </motion.div>
          </div>
        </div>
      </div>
      {/* //sedonvb */}
      <div className="mt-25 p-2 ">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-900">
          Working Process
        </h2>
        <div className="w-[100%] grid grid-cols-[25%_50%_25%] ">
          <motion.div 
          initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-30 ">
            <BookAppointmentButton
              title="Book Appointment"
              subtitle="shedule online in minutes"
              order={1}
            />

            <BookAppointmentButton
              title="Consult a Docktor "
              subtitle="Meet with specialists doctor in local "
              order={2}
            />
          </motion.div>

          <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
          className="grid  grid-cols-[30%_40%_30%] w-[100%]">
            <div className="realtive flex flex-col  relative">
              <svg
                className="absolute -right-4 -z-2 top-7"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 285 124"
                width="285"
                height="124"
              >
                <metadata></metadata>
                <defs>
                  <style className="style-fonts"></style>
                </defs>
                <rect
                  x="0"
                  y="0"
                  width="285"
                  height="124"
                  fill="#ffffff"
                  fillOpacity={0}
                ></rect>
                <g strokeLinecap="round">
                  <g transform="translate(275 114) rotate(0 -132.5 -52)">
                    <path
                      d="M0 0 C-31.21 0, -62.41 0, -116.5 0 M0 0 C-24.81 0, -49.61 0, -116.5 0 M-116.5 0 C-127.17 0, -132.5 -5.33, -132.5 -16 M-116.5 0 C-127.17 0, -132.5 -5.33, -132.5 -16 M-132.5 -16 C-132.5 -38.88, -132.5 -61.76, -132.5 -88 M-132.5 -16 C-132.5 -43.72, -132.5 -71.43, -132.5 -88 M-132.5 -88 C-132.5 -98.67, -137.83 -104, -148.5 -104 M-132.5 -88 C-132.5 -98.67, -137.83 -104, -148.5 -104 M-148.5 -104 C-172.62 -104, -196.74 -104, -265 -104 M-148.5 -104 C-189.28 -104, -230.06 -104, -265 -104"
                      stroke="gray"
                      strokeOpacity={0.2}
                      strokeWidth="2"
                      fill="none"
                    ></path>
                  </g>
                </g>
                <mask></mask>
              </svg>

              <svg
                className="absolute bottom-8 -left-20 -z-2"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 289 112.9309859154937"
                width="289"
                height="112.9309859154937"
              >
                <metadata></metadata>
                <defs>
                  <style className="style-fonts"></style>
                </defs>
                <rect
                  x="0"
                  y="0"
                  width="289"
                  height="112.9309859154937"
                  fill="#ffffff"
                  fillOpacity={0}
                ></rect>
                <g strokeLinecap="round">
                  <g transform="translate(279 10) rotate(0 -134.5 46.46549295774685)">
                    <path
                      d="M0 0 C-40.83 0, -81.65 0, -118.5 0 M0 0 C-33.98 0, -67.95 0, -118.5 0 M-118.5 0 C-129.17 0, -134.5 5.33, -134.5 16 M-118.5 0 C-129.17 0, -134.5 5.33, -134.5 16 M-134.5 16 C-134.5 29.62, -134.5 43.24, -134.5 76.93 M-134.5 16 C-134.5 34.08, -134.5 52.17, -134.5 76.93 M-134.5 76.93 C-134.5 87.6, -139.83 92.93, -150.5 92.93 M-134.5 76.93 C-134.5 87.6, -139.83 92.93, -150.5 92.93 M-150.5 92.93 C-191.65 92.93, -232.79 92.93, -269 92.93 M-150.5 92.93 C-194.13 92.93, -237.77 92.93, -269 92.93"
                      stroke="gray"
                      strokeWidth="2"
                      fill="none"
                      strokeOpacity={0.2}
                    ></path>
                  </g>
                </g>
                <mask></mask>
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <div className="border w-full rounded-2xl p-5  z-4 bg-white text-center">
                Working Process
              </div>
            </div>
            <div className="flex flex-col  relative">
              <svg
                className="top-9 absolute -left-3 -z-2"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 240 110.10000000000036"
                width="240"
                height="110.10000000000036"
              >
                <metadata></metadata>
                <defs>
                  <style className=" top-100"></style>
                </defs>
                <rect
                  x="0"
                  y="0"
                  width="240"
                  height="110.10000000000036"
                  fill="#ffffff"
                ></rect>
                <g strokeLinecap="round">
                  <g transform="translate(10 100.10000000000036) rotate(0 110 -45.05000000000018)">
                    <path
                      d="M0 0 C19.66 0, 39.32 0, 97 0 M0 0 C31.62 0, 63.23 0, 97 0 M97 0 C107.67 0, 113 -5.33, 113 -16 M97 0 C107.67 0, 113 -5.33, 113 -16 M113 -16 C113 -31.56, 113 -47.13, 113 -74.1 M113 -16 C113 -30.85, 113 -45.71, 113 -74.1 M113 -74.1 C113 -84.77, 118.33 -90.1, 129 -90.1 M113 -74.1 C113 -84.77, 118.33 -90.1, 129 -90.1 M129 -90.1 C148.02 -90.1, 167.03 -90.1, 220 -90.1 M129 -90.1 C161.47 -90.1, 193.94 -90.1, 220 -90.1"
                      stroke="gray"
                      strokeWidth="1"
                      fill="none"
                      fillOpacity={0}
                      strokeOpacity={0.2}
                    ></path>
                  </g>
                </g>
                <mask></mask>
              </svg>

              <svg
                className="absolute bottom-8 -left-3 -z-2"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 246 118.39999999999964"
                width="246"
                height="118.39999999999964"
              >
                <metadata></metadata>
                <defs>
                  <style className="style-fonts"></style>
                </defs>
                <rect
                  x="0"
                  y="0"
                  width="246"
                  height="118.39999999999964"
                  fill="gray"
                  fillOpacity={0}
                ></rect>
                <g strokeLinecap="round">
                  <g transform="translate(10 10) rotate(0 113 49.19999999999982)">
                    <path
                      d="M0 0 C24.07 0, 48.15 0, 97 0 M0 0 C37.97 0, 75.94 0, 97 0 M97 0 C107.67 0, 113 5.33, 113 16 M97 0 C107.67 0, 113 5.33, 113 16 M113 16 C113 33.4, 113 50.8, 113 82.4 M113 16 C113 42.43, 113 68.87, 113 82.4 M113 82.4 C113 93.07, 118.33 98.4, 129 98.4 M113 82.4 C113 93.07, 118.33 98.4, 129 98.4 M129 98.4 C158.79 98.4, 188.58 98.4, 226 98.4 M129 98.4 C151.61 98.4, 174.23 98.4, 226 98.4"
                      stroke="gray"
                      strokeOpacity={0.2}
                      strokeWidth="2"
                      fill="none"
                    ></path>
                  </g>
                </g>
                <mask></mask>
              </svg>
            </div>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-28">
            <BookAppointmentButton
              title="Diagnosis & Tests"
              subtitle="Get accurate reports "
              order={3}
            />
            <BookAppointmentButton
              title="Treatment & Follow-up"
              subtitle="Follw-up care and support "
              order={4}
            />
          </motion.div>
        </div>
        <div className="mt-25">
          <div className="w-[100%] grid grid-cols-2 gap-3">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                className="rounded-2xl size-full"
                src={
                  "https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                height={1200}
                sizes="full"
                width={1200}
                alt="dfsa"
              />
            </motion.div>
            <motion.div
            initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center items-start p-5 flex-col w-full ">
              <button className="px-7 py-[0.4rem] rounded-2xl border-1 bg-gradient-to-br from-gray-50/80  to-violet-50  text-gray-900  font-medium">
                Why Choose Us
              </button>
              <div
              
              className="mt-6">
                <h1 className="text-[3.2rem]   font-medium">Trusted by </h1>
                <h1 className="text-[3.2rem] -mt-3 w-[100%] font-medium ">
                  Thousands of Patients
                </h1>
              </div>
              <p className="mt-4 font-normal text-gray-600">
                We differentiate ourselves by providing not only exceptional
                treatment but also a comforting, reassuring experience that
                places your well-being at the center of everything we do
              </p>
            </motion.div>
            
          </div>
          <div className="mt-10 flex w-[100%] gap-5">
            <motion.div
            initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
            className="">
            <DoctorCard />
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" , delay:0.1}}
  viewport={{ once: true, amount: 0.3 }}
            className="">
            <DoctorCard />
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" , delay:0.2 }}
  viewport={{ once: true, amount: 0.3 }}
            className="">
            <DoctorCard />
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay:0.4 }}
  viewport={{ once: true, amount: 0.3 }}
            className="">
            <DoctorCard />
            </motion.div>
            
          </div>
          <motion.div
          initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
          className="w-[100%] mt-15">
            <AppointmentBanner />
          </motion.div>
        </div>
      </div>

      <footer className="w-[100%] border-t-1  bg-gray-50 p-5 flex justify-between ">
        <div className="flex items-center gap-2">
          <Image src={logo} height={40} width={40} alt="logo"></Image>
          <p className="text-lg text-neutral-800 font-medium">MedVisit</p>
        </div>

        <ul className="flex gap-3 ">
          <li className="hover:text-violet-600 hover:cursor-pointer">Home</li>
          <li className="hover:text-violet-600 hover:cursor-pointer">
            About us
          </li>
        </ul>
      </footer>
    </div>
  );
}
