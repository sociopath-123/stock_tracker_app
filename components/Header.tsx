"use client";

import Link from "next/link";
import Image from "next/image";
import Navitems from "@/components/Navitems";
import UserDropdown from "@/components/UserDropdown";

const Header = () => {
    return (
        <header className="sticky top-0 header bg-gray-600">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/assets/icons/logo.svg"
                        alt="Signalist logo"
                        width={140}
                        height={32}
                        className="h-8 w-auto cursor-pointer"
                        priority
                    />
                </Link>

                {/* Navigation */}
                <nav className="hidden sm:block">
                    <Navitems />
                </nav>
                <UserDropdown/>
            </div>
        </header>
    );
};

export default Header;
