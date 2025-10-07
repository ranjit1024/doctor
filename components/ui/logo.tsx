import Image from "next/image";
import logo from "../../public/logo.png";
export default function Logo({width,height}:{
    width:number,
    height:number
}) {
  return (
    <div className="flex items-center gap-2">
      <Image src={logo} height={height} width={width} alt="logo" />
      
    </div>
  );
}
