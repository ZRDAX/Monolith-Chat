import Link from "next/link";
import { Package2, Search, Code } from "lucide-react";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Nav = () => {
	return (
		<div className="flex h-full max-h-screen flex-col gap-2">
			{/* TOP/SIDEBAR */}
			<div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
				{/* LOGO */}
				<Link
					href="/"
					className="text-accent-branco flex items-center gap-2 font-semibold"
				>
					<BsLayoutTextSidebar className=" h-6 w-6" />
				</Link>

				<h2 className="text-center">CHATS</h2>

				{/* PESQUISAR */}
				<div className="ml-auto h-8 w-8">
					<form>
						<div className="relative">
							<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
							<Input
								type="search"
								placeholder="Search products..."
								className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
							/>
						</div>
					</form>
				</div>
			</div>

			{/* Nav */}
			<div className="flex-1">
				<nav className=" text-accent-branco grid items-start px-2 text-sm font-medium lg:px-4">
					<Link
						href="#"
						className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
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
						className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
					>
						<Code className="h-4 w-4" />
						ruby
					</Link>

					<Link
						href="#"
						className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
					>
						<Code className="h-4 w-4" />
						csharp
					</Link>
					<Link
						href="#"
						className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
					>
						<Code className="h-4 w-4" />
						python
					</Link>
					<Link
						href="#"
						className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
					>
						<Code className="h-4 w-4" />
						lua
					</Link>
				</nav>
			</div>

			{/* venda */}
			<div className="mt-auto p-4">
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
		</div>
	);
};

export default Nav;
