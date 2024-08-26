import Image from "next/image";
import { Upload } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoLogoGameControllerB } from "react-icons/io";
import { MdSportsHandball } from "react-icons/md";
import { FaBook, FaCode } from "react-icons/fa";

const Tema = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4 md:grid-cols-4 lg:grid-cols-4 lg:gap-8">
            
            {/* CARD1 */}
            <Card className="overflow-hidden">
              <CardHeader className="text-center items-center">
                <Link href="/Chat" className="text-center items-center">
                    <IoLogoGameControllerB className="text-9xl text-center text-primary  hover:text-accent-hover" />
                </Link>
                    <CardTitle>Games</CardTitle>
                    <CardDescription>
                    Aqui tem muita gameplay
                    </CardDescription>
              </CardHeader>
            </Card>

            {/* CARD2 */}
            <Card className="overflow-hidden">
              <CardHeader className="text-center items-center">
                <Link href="/Chat" className="text-center items-center">
                <MdSportsHandball className="text-9xl text-center text-primary  hover:text-accent-hover" />
                </Link>
                    <CardTitle>Sport</CardTitle>
                    <CardDescription>
                    Praticamos todos os esportes
                    </CardDescription>
              </CardHeader>
            </Card>

            {/* CARD3 */}
            <Card className="overflow-hidden">
              <CardHeader className="text-center items-center">
                <Link href="/Chat" className="text-center items-center">
                    <FaBook  className="text-9xl text-center text-primary hover:text-accent-hover" />
                </Link>
                    <CardTitle>Study</CardTitle>
                    <CardDescription>
                    Foco e Estudos
                    </CardDescription>
              </CardHeader>
            </Card>

            {/* CARD4 */}
            <Card className="overflow-hidden">
              <CardHeader className="text-center items-center">
                <Link href="/Chat" className="text-center items-center">
                    <FaCode className="text-9xl text-center text-primary  hover:text-accent-hover" />
                </Link>
                    <CardTitle>Code</CardTitle>
                    <CardDescription>
                    Codando diariamente
                    </CardDescription>
              </CardHeader>
            </Card>


          </div>
        </main>
      </div>
    </div>
  );
};

export default Tema;
