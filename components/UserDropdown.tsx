"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";

// main function for user dropdown menu in header
const UserDropdown = () => {
  const router = useRouter();

  const handleSignout = async () => {
    router.push("/signout");
  };

  const user = { name: "John", email: "aashish@gmail.com" };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-3 text-gray-400 hover:text-yellow-500"
        >
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/92213759?v=4" />
            <AvatarFallback className="bg-yellow-400 text-yellow-800 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-base font-medium text-gray-400">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400 max-h-none overflow-y-visible">
        <DropdownMenuLabel>
          <div className="flex relative items-center gapt-3 py-2">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://avatars.githubusercontent.com/u/92213759?v=4" />
              <AvatarFallback className="bg-yellow-400 text-yellow-800 text-sm font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-base font-medium text-gray-400">
                {user.name}
              </span>
              <span className="text-sm text-gray-500">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="bg-gray-600"/>
        <DropdownMenuItem
          onClick={handleSignout}
          className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer">
          <LogOut className="h-4 w-4 mr-2 hidden sm:block" />
          LogOut
        </DropdownMenuItem>

        <DropdownMenuSeparator className=" bg-gray-600 hidden sm:block"/>
        <nav className="sm:hidden">
            <NavItems/>
            </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
