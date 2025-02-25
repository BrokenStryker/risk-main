"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavTab {
  label: string
  href: string
}

const tabs: NavTab[] = [
  // ... your existing tabs
]

export function NavTabs() {
  const pathname = usePathname()

  return (
    <nav className="flex space-x-4 border-b">
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={cn(
            "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
            pathname === tab.href
              ? "border-b-2 border-primary text-primary"
              : "text-muted-foreground"
          )}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  )
} 