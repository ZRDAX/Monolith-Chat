import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { TbCubeSend } from "react-icons/tb";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
const Conversation = () => {
	return (
		<main className="grid flex-1 gap-4 overflow-auto p-4">
			<div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
				<div className="flex-1">
					{/* MENSAGEM 1 */}
					<Card className="flex items-center w-1/4 h-1/6 mt-7">
						<CardHeader>
							<CardTitle className="text-xs text-accent-vermilion">
								Philippsen
							</CardTitle>
							<CardDescription className="text-lg text-accent-cinzaAcizentado ml-2">
								Oi!
							</CardDescription>
						</CardHeader>
					</Card>

					{/* MENSAGEM 2 */}
					<Card className="flex items-center w-1/4 h-1/6 mt-5">
						<CardHeader>
							<CardTitle className="text-xs text-green-400">Rochadel</CardTitle>
							<CardDescription className="text-lg text-accent-cinzaAcizentado ml-2">
								Oi!
							</CardDescription>
						</CardHeader>
					</Card>

					{/* MENSAGEM 3 */}
					<Card className="flex items-center w-1/4 h-1/6 mt-5 ml-auto">
						<CardHeader>
							<CardTitle className="text-xs text-accent-secondBlack ml-auto">
								ZRDAX
							</CardTitle>
							<CardDescription className="text-lg text-accent-cinzaAcizentado ml-2">
								opa!
							</CardDescription>
						</CardHeader>
					</Card>
				</div>
				<form className="relative overflow-hidden rounded-lg border bg-accent-vermilion focus-within:ring-1 focus-within:ring-ring">
					<Label htmlFor="message" className="sr-only">
						Message
					</Label>
					<div className="flex items-center h-full">
						<Textarea
							id="message"
							placeholder="Escreva aqui..."
							className="min-h-12 resize-none p-3 shadow-none focus-visible:ring-0 flex-grow h-full"
						/>
						<Button className="bg-accent-vermilion hover:bg-accent-secondBlack h-full">
							<TbCubeSend className="h-10 w-10" />
						</Button>
					</div>
				</form>
			</div>
		</main>
	);
};

export default Conversation;
