"use client";
import Chats from "@/components/Chats";
const Chat = () => {
	return (
		<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
			<Chats />
		</div>
	);
};

export default Chat;
