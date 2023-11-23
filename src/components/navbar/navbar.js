"use client";

import React from "react";
import "./navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className="navbar">
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                <p>Home</p>
            </Link>
            <div className="line"></div>
            <Link className={`link ${pathname === '/diary' ? 'active' : ''}`}href="/diary">
                <p>Fetch</p>
            </Link>
        </div>
    )
}

export default Navbar;
