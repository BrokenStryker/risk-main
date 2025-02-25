"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

export default function RootPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(1 - scrollY / 200, 0);

  return (
    <div className="bg-[rgba(15,15,15,255)]">
      <div className="relative z-10 flex flex-col items-center justify-center p-8 pt-16">
        <div className="flex flex-col items-center text-center text-white">
          <div className="mb-6 relative w-[200px] h-[200px]">
            <Image
              src="/logo.jpg"
              alt="Cockpit Logo"
              fill
              priority
              className="object-contain"
              style={{ opacity }}
              unoptimized
              onError={(e) => {
                console.error("Image failed to load");
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/200?text=Cockpit+Logo";
              }}
            />
          </div>

          <h1 className="text-4xl font-bold mb-4">Welcome to Cockpit</h1>
          <p className="text-xl mb-8">Trading Risk Management Tools</p>
          <Link 
            href="/dashboard"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 inline-block mb-12"
          >
            Get Started
          </Link>
        </div>
      
        <div className="w-full max-w-6xl mx-auto px-4 mb-0">
          <div className="relative aspect-video bg-black/40 rounded-lg flex items-center justify-center overflow-hidden border border-white/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <Play className="h-10 w-10 text-white" fill="white" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-white text-sm">
              <p className="font-medium">Cockpit Overview</p>
              <p className="opacity-70">Learn how to manage trading risk effectively</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 