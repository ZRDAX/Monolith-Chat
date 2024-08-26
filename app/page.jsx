import Image from "next/image";
import Link from "next/link";

import { IoIosRadio } from "react-icons/io";
import { IoGlobeOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";


const Welcome = () => {
  return (
    <div className="h-screen flex flex-col bg-primary relative">

      {/* HEADER */}
      <header className="flex flex-row justify-between w-full p-7 text-white top-0">
        <h1 className="text-4xl font-bold">Monolitch</h1>
        <h2 className="text-4xl font-bold">001</h2>
      </header>

      {/* CONTENT */}
      <div className="flex flex-col lg:flex-row flex-grow pt-5 lg:pt-2">

        {/* IMAGE CONTAINER */}
        <div className="pl-2 ml-8 mb-10  h-1/2 lg:h-full lg:w-1/2 relative bg-white flex items-center justify-center">
          <div className="flex flex-row">
            <Image 
              src="/assets/pessoa.svg"
              alt="Pessoa"
              width="300"
              height="300"
              className="object-contain" 
            />
            <div className="flex flex-col gap-y-4 items-end text-right text-4xl text-red-600">
              <h3>CHATS</h3>
              <h3>CHATS</h3>
              <h3>CHATS</h3>
            </div>
          </div>
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center px-2 sm:px-6 md:px-8 lg:px-16 xl:px-28 text-gray-50">
          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold">CALLED ------- <br />ME ----- SSAGE</h2>

          {/* DESC */}
          <p className="md:text-xl text-justify">
            A MONOLITCH É UMA PLATAFORMA DE MENSAGENS
            PARA VOCÊ SE CONECTAR COM PESSOAS AO SEU
            REDOR E COMPARTILHAR SUAS IDEIAS, VIVÊNCIAS
            E REUNIÕES. TENHA UMA CONEXÃO...
          </p>

          {/* BUTTONS */}
          <div className="w-full flex gap-4 justify-center">
            <Link href="/Login">
              <Button 
                variant=""
                size="lg"
                className="uppercase flex items-center gap-2 w-96 bg-red-600"
              >
                <span>JOIN</span>
              </Button>
            </Link>
          </div>
          
        </div>
      </div>

      {/* footer */}
      <footer className="flex flex-row justify-between p-7 text-white top-0">
        <IoGlobeOutline />
          <p className="text-4xl font-bold"><span><IoIosRadio /></span>UVB 76</p>
        <IoGlobeOutline />
      </footer>

    </div>
  );
}

export default Welcome;
