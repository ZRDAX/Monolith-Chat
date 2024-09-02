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

			<div className="text-center text-accent-branco mt-6 fs-6 fw-bold">
				C H A T S
			</div>

			<div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
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
							Siga as regras do chat. A Monolitch não tolerará.
						</CardDescription>
					</CardHeader>
				</Card>
			</div>
		</div>
	);
};

export default Nav;
