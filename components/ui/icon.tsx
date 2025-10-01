import { Ambulance } from "lucide-react";

export function Icon({children}:{
      children: React.ReactNode;
}){
    return <div className="p-2 bg-white border-2   w-fit rounded-md text-purple-600 ">
        {children}
    </div>
}