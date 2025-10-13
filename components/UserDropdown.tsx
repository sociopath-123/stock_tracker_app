'use client'
import React from 'react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {LogOut} from "lucide-react";
import Navitems from "@/components/Navitems";

const UserDropdown = () => {

    const router = useRouter();

    const handleSignout = async () => {
        router.push("/sign-in");
    }
    const user = {name: 'varma', email: "codethatshit@gmail.com"};


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild >
                <Button variant= "ghost" className = "flex items-center gap-3 text-gray-4 hover: text-yellow-500">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shadcn.png"/>
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>

                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-gray-400">




                <DropdownMenuLabel>
                    <div className= "flex relative items-center gap-3 py-2">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="https://github.com/shadcn.png"/>

                            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col">
                        <span className="text-base font-medium text-gray-400">
                            {user.name}
                        </span>
                            <span className="text-sm text-gray-500">
                            {user.email}
                        </span>
                        </div>

                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-600"/>
                <DropdownMenuItem onClick={handleSignout} className= "text-gray-500 text-md font-medium focus: bg-transparent focus: text-yellow-500 transition-colors cursor-pointer">
                    <LogOut className="h-4 w-4 mr-2 hidden sm:block">
                        Logout
                    </LogOut>
                </DropdownMenuItem>

                <DropdownMenuSeparator className="hidden sm:block bg-gray-600"/>

                <nav className="sm:hidden">
                    <Navitems/>
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserDropdown
