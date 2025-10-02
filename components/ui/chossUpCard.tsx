import { CpuIcon } from "lucide-react"; // You can install react-icons if not already

export default function DoctorCard() {
  return (
    <div className=" rounded-2xl p-6 bg-gradient-to-br  dark:from-gray-850 dark:to-gray-900 bg-violet-50/50 border border-transparent hover:border-violet-400  b relative overflow-hidden">
      {/* Animated Icon Box */}
      <div className="w-14 h-14 flex items-center justify-center bg-violet-100 dark:bg-violet-900 rounded-xl mb-4  group-hover:rotate-6 group-hover:scale-105">
        <CpuIcon className="text-violet-500 text-3xl" />
      </div>
      {/* Title */}
      <h3 className="font-medium text-xl  text-gray-900 dark:text-white mb-6">
        Experienced &amp; Certified Doctors
      </h3>
      {/* Subtitle */}
      <p className="text-gray-600 dark:text-gray-300 text-base">
        Top doctors with years of certified expertise for your care.
      </p>
      {/* Faint background decoration */}
      <span className="absolute -z-10 right-2 -bottom-4 opacity-10 text-[6rem] text-violet-400 select-none pointer-events-none">&#9733;</span>
    </div>
  );
}
