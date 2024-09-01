import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { TbCubeSend } from "react-icons/tb";
import { Textarea } from "@/components/ui/textarea";
const Conversation = () => {
	return (
		<main className="grid flex-1 gap-4 overflow-auto p-4">
			<div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
				<div className="flex-1" />
				<form className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
					<Label htmlFor="message" className="sr-only">
						Message
					</Label>
					<div className="flex items-center">
						<Textarea
							id="message"
							placeholder="Escreva aqui..."
							className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0 flex-grow"
						/>
						<Button
							type="submit"
							size="sm"
							className="bg-accent-vermilion hover:bg-accent-secondBlack"
						>
							<TbCubeSend className="h-[100%] w-[100%]" />
						</Button>
					</div>
				</form>
			</div>
		</main>
	);
};

export default Conversation;
