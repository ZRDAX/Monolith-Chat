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
	return (
		<div className="container mx-auto p-7 ">
			<h2 className="text-2xl font-bold text-accent-branco text-center mb-4">
				MONOLITCH
			</h2>
			<p className="text-xl text-center text-accent-branco mb-12 mt-20">
				ESCOLHA SEU TEMA PARA CONVERSAR
			</p>
			<div className="flex flex-wrap justify-center gap-4 pt-5">
				<div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
					<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
						<div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4 md:grid-cols-4 lg:grid-cols-4 lg:gap-8">
							{/* CARD1 */}
							<Card className="overflow-hidden bg-transparent border-none shadow-none">
								<CardHeader className="text-center items-center ">
									<Link href="/Chat" className="text-center items-center">
										<IoLogoGameControllerB className="mb-3 text-9xl text-center text-accent-bege hover:text-accent-vermilion" />
									</Link>
									<CardTitle className="text-accent-branco">GAMES</CardTitle>
									<CardDescription className="text-accent-secondWhite">
										Aqui tem muita gameplay
									</CardDescription>
								</CardHeader>
							</Card>

							{/* CARD2 */}
							<Card className="overflow-hidden bg-transparent border-none shadow-none">
								<CardHeader className="text-center items-center">
									<Link href="/Chat" className="text-center items-center">
										<MdSportsHandball className="mb-3 text-9xl text-center text-accent-bege hover:text-accent-vermilion" />
									</Link>
									<CardTitle className="text-accent-branco">SPORT</CardTitle>
									<CardDescription className="text-accent-secondWhite">
										Praticamos todos os esportes
									</CardDescription>
								</CardHeader>
							</Card>

							{/* CARD3 */}
							<Card className="overflow-hidden bg-transparent border-none shadow-none">
								<CardHeader className="text-center items-center">
									<Link href="/Chat" className="text-center items-center">
										<FaBook className="mb-3 text-9xl text-center text-accent-bege hover:text-accent-vermilion" />
									</Link>
									<CardTitle className="text-accent-branco">STUDY</CardTitle>
									<CardDescription className="text-accent-secondWhite">
										Foco e Estudos
									</CardDescription>
								</CardHeader>
							</Card>

							{/* CARD4 */}
							<Card className="overflow-hidden bg-transparent border-none shadow-none">
								<CardHeader className="text-center items-center">
									<Link href="/Chat" className="text-center items-center">
										<FaCode className="mb-3 text-9xl text-center text-accent-bege hover:text-accent-vermilion" />
									</Link>
									<CardTitle className="text-accent-branco">CODE</CardTitle>
									<CardDescription className="text-accent-secondWhite">
										Codando diariamente
									</CardDescription>
								</CardHeader>
							</Card>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default Tema;
