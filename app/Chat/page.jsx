"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import Sidebar from "@/components/Sidebar";

import { CornerDownLeft, CircleUser, } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
const Chat = () => {
  return (
    <div className="grid min-h-screen w-full bg-primary md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />

      <main className="grid flex-1 gap-4 overflow-auto p-4">
        <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
        <Badge className="bg-accent-branco absolute right-3 top-3">
            <DropdownMenu className="absolute right-3 top-3">
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </Badge>
          <div className="flex-1" />
          <form
            className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
            x-chunk="dashboard-03-chunk-1"
          >
            <Label htmlFor="message" className="sr-only">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message here..."
              className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
            />
            
            <div className="flex items-center p-3 pt-">
              <Button type="submit" size="sm" className="ml-auto gap-1.5 bg-accent-vermilion hover:bg-accent-secondBlack">
                Send Message
                <CornerDownLeft className="size-3.5" />
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Chat;
