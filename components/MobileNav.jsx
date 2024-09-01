import Link from "next/link";
import { CircleUser, Menu, Search, Code } from "lucide-react";
import { Input } from "./ui/input";
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
								Siga as regras do chat Monolitch não tolerará.
							</CardDescription>
						</CardHeader>
					</Card>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
