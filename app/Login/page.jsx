import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TbMessages } from "react-icons/tb";

const Login = () => {
	return (
		<div className="w-full lg:grid lg:min-h-[300px] lg:grid-cols-2 xl:min-h-[300px]">
			<div className="hidden bg-muted lg:block">
				<div className="flex items-center h-screen w-full rounded-lg bg-accent-bege">
					<TbMessages className="h-full	 w-full text-accent-branco"/>
				</div>
			</div>

			<div className="flex items-center justify-center py-12">
				<div className="mx-auto grid w-[350px] gap-6">
					<div className="grid gap-2 text-center xl:text-center">
						<h1 className="text-3xl text-accent-branco font-bold">MONOLITCH</h1>
					</div>
					<div className="grid gap-4">
						<div className="grid gap-2">
							<Label htmlFor="user" className="text-accent-branco">
								User
							</Label>
							<Input id="user" type="" placeholder="Nickname" required />
						</div>
						<Link href="/Tema">
							<Button type="submit" className="w-full bg-accent-bege">
								Continue
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
