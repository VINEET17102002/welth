"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Welth Logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-4">
          <SignedIn>
            <Link href={"/dashboard"} className="text-gray-700 hover:text-gray-900 flex items-center gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>

            <Link href={"/transaction/create"}>
              <Button className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>

            <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-16 h-12",
                      userButtonAvatarImage: "w-12 h-12",
                    },
                  }}
                />
          </SignedIn>

          {/* Signed Out */}
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>

            <SignUpButton>
              <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>

        </div>
      </nav>
    </div>
  );
};

export default Header;
