'use client'
import {usePathname} from "next/navigation";
import {NAV_ITEMS} from "@/lib/constants";
import Link from "next/link";


import React from 'react'

const Navitems = () => {

    const pathname = usePathname();
    const isActive: (path: string) => boolean = (path: string) => {
        if (path == '/') return pathname == '/';

        return pathname.startsWith(path);
    }
    return (
        <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
            {NAV_ITEMS.map(({href, label}) => (
                <li key= {href}>
                    <Link href={href} className={`hover:text-yellow-500 transition-colors ${
                        isActive(href)?'text-gray-100': ''
                    }`}>
                        {label}
                    </Link>
                </li>
            ))}

        </ul>
    )
}
export default Navitems

// why did we use li there?
// for semantics and accessibility, it helps screen readers and other assistive technologies understand the structure of the navigation menu better.
// is it mostly used for menu like structures?
// yes, it is mostly used for menu-like structures, lists of links, or any other grouped items in a web page.