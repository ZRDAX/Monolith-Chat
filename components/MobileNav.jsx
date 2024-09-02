import Link from "next/link";
import { CircleUser, Menu, Search, Code } from "lucide-react";
import { Input } from "./ui/input";
import { BsLayoutTextSidebar } from "react-icons/bs";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BiSpreadsheet } from "react-icons/bi";

const MobileNav = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" size="icon" className="shrink-0 md:hidden">
					<Menu className="h-5 w-5" />
					<span className="sr-only">Toggle navigation menu</span>
				</Button>
			</SheetTrigger>

			{/* MOBILENAV */}
			<SheetContent
				side="left"
				className="flex flex-col bg-accent-cinzaAcizentado"
			>
				<div className="text-center text-accent-branco mt-6 fs-6 fw-bold">
					C H A T S
				</div>
				<div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
					{/* LOGO */}
					<Link
						href="/"
						className="text-accent-branco flex items-center gap-2 font-semibold"
					>
						<BsLayoutTextSidebar className="h-6 w-6" />
					</Link>

					{/* PESQUISAR */}
					<div className="ml-4 flex-grow flex items-center">
						<form className="w-full">
							<div className="relative h-full">
								<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-muted-foreground" />
								<Input
									type="search"
									placeholder="Search..."
									className="h-full w-full bg-background pl-12 pr-4 shadow-none"
								/>
							</div>
						</form>
					</div>
				</div>

				<nav className="grid gap-2 text-lg font-medium">
					<Link
						href="#"
						className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all text-accent-branco hover:text-primary"
					>
						<Code className="h-4 w-4" />
						react
						{/* notificacao */}
						<Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-bege">
							6
						</Badge>
					</Link>
					<Link
						href="#"
						className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all text-accent-branco hover:text-primary"
					>
						<Code className="h-4 w-4" />
						ruby
					</Link>

					<Link
						href="#"
						className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 transition-all text-accent-branco hover:text-primary"
					>
						<Code className="h-4 w-4" />
						csharp{" "}
					</Link>
					<Link
						href="#"
						className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all text-accent-branco hover:text-primary"
					>
						<Code className="h-4 w-4" />
						python
					</Link>
					<Link
						href="#"
						className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all text-accent-branco hover:text-primary"
					>
						<Code className="h-4 w-4" />
						lua
					</Link>
				</nav>
				{/* PRO */}
				<div className="mt-auto">
					<Card
						x-chunk="dashboard-02-chunk-0"
						className="bg-transparent border-none"
					>
						<CardHeader className="p-2 pt-0 md:p-4">
							<CardTitle className="text-center text-accent-branco">
								monolitch-chat
							</CardTitle>
							<CardDescription className="text-center text-accent-secondWhite">
								Siga as regras do chat. A Monolitch não tolerará.
							</CardDescription>
						</CardHeader>
					</Card>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
