'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LogOut } from 'lucide-react'
import Navitems from '@/components/Navitems'

const UserDropdown = () => {
    const router = useRouter()

    const handleSignout = async () => {
        router.push('/sign-in')
    }

    const user = { name: 'varma', email: 'codethatshit@gmail.com' }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex items-center justify-center w-9 h-9 rounded-full p-0 hover:bg-yellow-500/10 transition-colors"
                >
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shadcn.png" alt="user avatar" />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                            {user.name[0].toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end" // aligns the dropdown to the end of the trigger
                sideOffset={8} // adds spacing between trigger and dropdown
                className="min-w-[16rem] max-w-[90vw] bg-[#1a1a1a] border border-gray-700 text-gray-300 rounded-lg overflow-hidden"
            >
                {/* User Info */}
                <DropdownMenuLabel>
                    <div className="flex items-center gap-3 py-2 px-1.5">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="https://github.com/shadcn.png" alt="user avatar" />
                            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                                {user.name[0].toUpperCase()}
                            </AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col truncate max-w-[11rem]">
                            <span className="text-base font-medium text-gray-200 truncate">{user.name}</span>
                            <span className="text-sm text-gray-500 truncate">{user.email}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator className="bg-gray-700" />

                {/* Logout Button */}
                <DropdownMenuItem
                    onClick={handleSignout}
                    className="flex items-center text-gray-400 hover:text-yellow-500 focus:text-yellow-500 font-medium cursor-pointer transition-colors"
                >
                    <LogOut className="h-4 w-4 mr-2" />
                    <span>Logout</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator className="hidden sm:block bg-gray-700" />

                {/* Mobile Nav */}
                <nav className="sm:hidden">
                    <Navitems />
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown
