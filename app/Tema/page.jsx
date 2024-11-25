"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FaBook, FaCode } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { MdSportsHandball } from "react-icons/md";

const Tema = () => {
  const [userName, setUserName] = useState("");
  const chats = "/Chat"

  useEffect(() => {
    // Recuperar o nome do localStorage ao carregar a página
    if (typeof window !== "undefined") {
      const savedName = localStorage.getItem("nick"); // Recupera o nickname salvo no localStorage
      if (savedName) {
        setUserName(savedName);
      }
    }
  }, []); // Executa apenas uma vez ao montar o componente

  return (
    <div className="container mx-auto p-7">
      <h2 className="text-2xl font-bold text-accent-branco text-center mb-4">
        MONOLITCH
      </h2>
      <p className="text-xl text-center text-accent-branco mb-12 mt-20">
        <span className="text-accent-vermilion font-bold text-2xl " >{userName?.toUpperCase()}</span> , ESCOLHA UM TEMA PARA INICIAR UMA CONVERSA
      </p>
      <div className="flex flex-wrap justify-center gap-4 pt-5">
        <main className="grid max-w-[59rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* CARD 1 */}
          <Card className="overflow-hidden bg-transparent border-none shadow-none hover:scale-105 transition-transform">
            <CardHeader className="text-center items-center">
              <Link href="/Chat" className="text-center items-center">
                <IoLogoGameControllerB className="mb-3 text-9xl text-center text-accent-bege hover:text-accent-vermilion" />
              </Link>
              <CardTitle className="text-accent-branco">GAMES</CardTitle>
              <CardDescription className="text-accent-secondWhite">
                Aqui tem muita gameplay.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* CARD 2 */}
          <Card className="overflow-hidden bg-transparent border-none shadow-none hover:scale-105 transition-transform">
            <CardHeader className="text-center items-center">
              <Link href={chats} className="text-center items-center">
                <MdSportsHandball className="mb-3 text-9xl text-center text-accent-bege hover:text-accent-vermilion" />
              </Link>
              <CardTitle className="text-accent-branco">SPORT</CardTitle>
              <CardDescription className="text-accent-secondWhite">
                Praticamos todos os esportes.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* CARD 3 */}
          <Card className="overflow-hidden bg-transparent border-none shadow-none hover:scale-105 transition-transform">
            <CardHeader className="text-center items-center">
              <Link href={chats} className="text-center items-center">
                <FaBook className="mb-3 text-9xl text-center text-accent-bege hover:text-accent-vermilion" />
              </Link>
              <CardTitle className="text-accent-branco">STUDY</CardTitle>
              <CardDescription className="text-accent-secondWhite">
                Foco e estudos.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* CARD 4 */}
          <Card className="overflow-hidden bg-transparent border-none shadow-none hover:scale-105 transition-transform">
            <CardHeader className="text-center items-center">
              <Link href={chats} className="text-center items-center">
                <FaCode className="mb-3 text-9xl text-center text-accent-bege hover:text-accent-vermilion" />
              </Link>
              <CardTitle className="text-accent-branco">CODE</CardTitle>
              <CardDescription className="text-accent-secondWhite">
                Codando diariamente.
              </CardDescription>
            </CardHeader>
          </Card>
        </main>
		<footer>
			<div className=" mt-10 flex justify-center items-center">
				<p className="text-sm text-center text-accent-secondWhite mb-4">Atualmente, apenas um categoria está disponível. Mais categorias em breve! <br />obs: categoria global </p>
			</div>
		</footer>
      </div>
    </div>
  );
};

export default Tema;
