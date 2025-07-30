"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CreditCard, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { LuSettings } from "react-icons/lu";
import { useUser } from "../hooks";

const UserButton = () => {
  const { user, isLoading } = useUser();
  const [signingOut, setSigningOut] = useState(false);

  const handleLogout = async () => {
    setSigningOut(true);

    await signOut({
      redirectTo: "/signin",
    });

    setSigningOut(false);
  };

  if (isLoading) {
    return (
      <div className="p-1">
        <Avatar className="animate-pulse rounded-md">
          <AvatarFallback className="bg-zinc-800/30 rounded-md" />
        </Avatar>
      </div>
    );
  }

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-fit flex items-center gap-2 p-1 ring-2 ring-transparent hover:ring-zinc-300/25 duration-100 transition-all rounded-md flex-row-reverse">
        <div className="bg-gradient-to-b from-blue-600 to-primary rounded-md size-8 text-white/50 relative overflow-hidden grid place-content-center">
          <span className="capitalize font-medium">
            {user.name?.at(0) || "U"}
          </span>
        </div>
        <div className="group-data-[collapsible=icon]:hidden hidden sm:flex flex-col mr-2 items-start -space-y-0.5">
          <span className="whitespace-nowrap font-medium">{user.name}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={12}
        align="start"
        className="min-w-[14rem] mx-2 px-0 flex flex-col"
      >
        <div className="flex flex-col px-4 py-2">
          <p className="font-medium">{user.name}</p>
          <span className="text-sm">{user.email}</span>
        </div>
        <Link href={"/billing"}>
          <DropdownMenuItem className="h-10 px-4">
            <CreditCard className="mr-1 h-4 w-4" />
            <span>Billing</span>
          </DropdownMenuItem>
        </Link>
        <Link href={"/settings"}>
          <DropdownMenuItem className="h-10 px-4">
            <LuSettings className="mr-1 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          disabled={signingOut}
          onClick={() => handleLogout()}
          className="h-10 px-4 text-destructive! hover:text-destructive!"
        >
          <LogOut className="mr-1 h-4 w-4 text-destructive! hover:text-destructive!" />
          <span>{signingOut ? "logging out..." : "Logout"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserButton;
