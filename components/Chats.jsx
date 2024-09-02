import Link from "next/link";
import { Button } from "./ui/button";
import { CircleUser } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiSpreadsheet } from "react-icons/bi";
//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Conversation from "./conversation";

const Chats = () => {
	return (
		<>
			<div className="hidden border-r bg-muted/40 md:block xl:flex bg-accent-cinzaAcizentado">
				<Nav />
			</div>

			<div className="flex flex-col">
				<header className="flex h-14 items-center gap-4 bg-muted/40 px-4 lg:h-[60px] lg:px-6">
					<MobileNav />
					<div className="w-full flex-1">
						<form>
							<Link href="/Tema">
								<div className="relative justify-between flex-row">
									<BiSpreadsheet className="h-6 w-6 text-accent-branco" />
								</div>
							</Link>
						</form>
					</div>
					<h2 className="font-semibold text-xl text-accent-bege">ZRDAX</h2>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="secondary" size="icon" className="rounded-full">
								<CircleUser className="h-5 w-5" />
								<span className="sr-only">Toggle user menu</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuLabel className="text-accent-cinzaAcizentado">
								Minha Conta
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="text-accent-cinzaAcizentado">
								Settings
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<Link href="/">
								<DropdownMenuItem className="text-accent-vermilion">
									Logout
								</DropdownMenuItem>
							</Link>
						</DropdownMenuContent>
					</DropdownMenu>
				</header>
				<Conversation />
			</div>
		</>
	);
};

export default Chats;
