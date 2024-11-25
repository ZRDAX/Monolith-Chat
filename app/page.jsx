import { Button } from "@/components/ui/button";
import { Globe, Radio } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
	return (
		<div className="min-h-screen flex flex-col bg-zinc-900 bg-hero-noise relative">
			{/* Header */}
			<header className="flex justify-between items-center w-full p-7">
				<h1 className="text-7xl font-bold text-white">MONOLITCH</h1>
				<span className="text-4xl font-bold text-accent-vermilion xl:text-center">001</span>
			</header>

			{/* Main Content */}
			<main className="flex-1 flex flex-col lg:flex-row gap-8 p-4 md:p-8">
				{/* Left Section - Image Card */}
				<div className="w-full lg:w-1/2">
					<div className="bg-white rounded-lg p-6 h-full flex items-center justify-center">
						<div className="flex flex-col sm:flex-row items-center gap-8">
							<Image
								src="/assets/pessoa.svg"
								alt="Profile"
								width={260}
								height={260}
								className="object-contain"
								priority
							/>
							<div className="flex flex-col gap-8">
								{[1, 2, 3].map((_, i) => (
									<span
										key={i}
										className="text-5xl lg:text-6xl font-bold text-[#C15A4E] tracking-wider"
										style={{ WebkitTextStroke: "1px #C15A4E" }}
									>
										CHAT
									</span>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Right Section - Text Content */}
				<div className="w-full lg:w-1/2 flex flex-col justify-center gap-8 px-4 lg:px-16">
					<h2 className="text-3xl sm:text-5xl font-bold text-white leading-relaxed text-">
						CALLED ------- <br />
						ME ----- SSAGE
					</h2>

					<p className="text-xs text-white max-w-md text-justify">
						A MONOLITCH É UMA PLATAFORMA DE MENSAGENS PARA VOCÊ SE CONECTAR COM
						PESSOAS AO SEU REDOR E COMPARTILHAR SUAS IDEIAS, VIVÊNCIAS E
						REUNIÕES TENHA UMA CONEXÃO...
					</p>

					<Button
						className="w-full max-w-md bg-[#C15A4E] hover:bg-[#C15A4E]/90 text-white"
						size="lg"
						asChild
					>
						<Link href="/Login">JOIN</Link>
					</Button>
				</div>
			</main>

			{/* Footer */}
			<footer className="flex justify-between items-center p-7">
				<Globe className="h-8 w-8 text-[#C15A4E]" />
				<div className="flex items-center gap-2 text-[#D4B59E]">
					<Radio className="h-8 w-8" />
					<span className="text-2xl font-bold">UVB 76</span>
				</div>
				<Globe className="h-8 w-8 text-[#C15A4E]" />
			</footer>
		</div>
	);
}
