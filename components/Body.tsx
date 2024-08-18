import React from "react";
import Particle from "./Particles";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const Body = () => {
    return (
        <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center"> 
            <Particle/>
            <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
          </div>
          </div>
  )
}

export default Body