"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function Header() {
  const pathname = usePathname();
  
  const navItems = [
    { name: "Setup", href: "/setup" },
    { name: "Changelog", href: "/changelog" },
    { name: "Pricing", href: "/pricing" },
  ];
  
  return (
    <header className="border-b bg-black text-white">
      <div className="container flex h-16 items-center">
        <div className="mr-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Cockpit</span>
          </Link>
        </div>
        
        <nav className="flex-1 flex justify-center">
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full bg-[#111111] transition-opacity hover:opacity-70",
                  pathname === item.href 
                    ? "text-white" 
                    : "text-gray-300"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link
            href="/dashboard"
            className="px-4 py-2 text-sm font-medium rounded-full bg-white text-black transition-opacity hover:opacity-70"
          >
            Dashboard
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
}
