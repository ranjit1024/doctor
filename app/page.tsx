"use client";
import Image from "next/image";
import logo from "../public/filalogo.png";
import { Ambulance, Pill } from "lucide-react";
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
import TestimonialsSection from "@/components/ui/testominla";

export default function Home() {
  return (
    <div className="p-4">
      <header>
        <nav className="grid grid-cols-[10%_80%_10%] ">
          <div className="flex items-center gap-2">
            <Image src={logo} height={30} width={35} alt="logo" />
            <p className="text-[1.2rem] font-[500] text-gray-900">MedVisit</p>
          </div>
          <div className="flex items-center w-[100%] justify-center gap-10">
             <motion.a
        href="/"
        className="relative text-lg font-medium text-gray-700 hover:text-gray-900"
        whileHover="hover"
      >
        Home
        <motion.span
          className="absolute -bottom-1 left-0 h-0.75 bg-violet-600"
          initial={{ width: 0 }}
          variants={{
            hover: { width: "100%" }
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>
      
      <motion.a
        href="/"
        className="relative text-lg font-medium text-gray-700 hover:text-gray-900"
        whileHover="hover"
      >
        About Us
        <motion.span
          className="absolute -bottom-1 left-0 h-0.75 bg-violet-600"
          initial={{ width: 0 }}
          variants={{
            hover: { width: "100%" }
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>
             
          </div>
          <div className="text-end">
            <Button variant={"outline"}>Contact</Button>
          </div>
        </nav>
      </header>
      <div className=" bg-neutral-50 rounded-2xl m-5 h-[110vh]  grid grid-cols-[15%_70%_15%]">
        <div className="w-full">
          <div className="border-dashed h-100 w-40  border-zinc-900/10 border-r-2 border-b-2 rounded-br-2xl "></div>
          <div className=" h-80 absolute top-94 w-50   border-zinc-900/10 border-r-2 border-t-2 rounded-tr-2xl ">
            <div className="absolute -top-5  right-4">
              <Icon>
                <Ambulance />
              </Icon>
            </div>

            <div className="absolute top-43 left-10 ">
              <LatestVisitedDoctor />
            </div>
          </div>
        </div>
        <div className="flex relative item-center justify-center w-[100%] flex-col">
          <div className="absolute top-30  left-20">
            <Icon>
              <HeartPlusIcon />
            </Icon>
          </div>
          <div className="absolute top-30  right-20">
            <Icon>
              <Pill />
            </Icon>
          </div>
          <div className="text-center">
            <h1 className="text-7xl mb-2 ">Skip the calls</h1>
            <h1 className="text-7xl">Book care online</h1>
          </div>
          <div className="text-center mt-5 text-gray-500  flex justify-center ">
            <p className="w-[80%] text-lg">
              Healthcare that fits the schedule. View real‑time slots from
              trusted local docktors, lock in a visit in a few clicks
            </p>
          </div>
          <div className="text-center mt-7">
            <Button className="w-fit bg-indigo-600 px-7 py-6 text-md hover:bg-indigo-800 hover:cursor-pointer hover:">
              Book Appointment
            </Button>
          </div>
          <div className="flex justify-center absolute bottom-0 items-center w-full">
            <div className="p-5">
              <TotoalAppointment />
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className=" h-100 w-45  border-zinc-900/10 border-l-2 border-b-2 rounded-bl-2xl "></div>
          <div className=" h-80 absolute right-10  top-95 w-60  border-dashed   border-zinc-900/10 border-l-2 border-t-2 rounded-tl-2xl ">
            <div className="absolute -top-5  left-10">
              <Icon>
                <StethoscopeIcon />
              </Icon>
            </div>
            <div className="absolute  -bottom-10  -left-20   ">
              <ServiceCard />
            </div>
          </div>
        </div>
      </div>
      {/* //sedonvb */}
      <div className="mt-25 p-2 ">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-900">
          Working Process
        </h2>
        <div className="w-[100%] grid grid-cols-[25%_50%_25%] ">
          <div className="flex flex-col gap-30 ">
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
          </div>
          <div className="grid  grid-cols-[30%_40%_30%] w-[100%]">
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
          </div>
          <div className="flex flex-col gap-28">
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
          </div>
        </div>
        <div className="mt-25">
          <div className="w-[100%] grid grid-cols-2 gap-3">
            <div>
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
            </div>
            <div className="flex justify-center items-start p-5 flex-col w-full ">
              <button className="px-7 py-[0.4rem] rounded-2xl border-1 bg-gradient-to-br from-gray-50/80  to-violet-50  text-gray-900  font-medium">
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
          </div>
          <div className="mt-10 flex w-[100%] gap-5">
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
          </div>
          <div className="w-[100%] mt-15">
            <AppointmentBanner />
          </div>
          <div className="w-[100%] mt-15">
   
          </div>
        </div>
      </div>
    </div>
  );
}
