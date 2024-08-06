"use client";
import React, { useState, useEffect, ReactNode } from "react";
import { CreditCard, History, WandSparkles, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";

const menuList = [
  {
    name: "Dashboard",
    icon: WandSparkles,
    path: "/dashboard",
  },
  {
    name: "History",
    icon: History,
    path: "/dashboard/history",
  },
  {
    name: "Upgrade",
    icon: CreditCard,
    path: "/dashboard/upgrade",
  },
];

const MobileNav = ({ AIUsageComponent } : { AIUsageComponent : ReactNode}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState("");
  const path = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setAnimation("slide-out");
      setTimeout(() => setIsOpen(false), 300); // Match the duration of the slide-out animation
    }
  }, [path]);

  const toggleMenu = () => {
    if (isOpen) {
      setAnimation("slide-out");
      setTimeout(() => setIsOpen(false), 300); // Match the duration of the slide-out animation
    } else {
      setIsOpen(true);
      setAnimation("slide-in");
    }
  };

  const handleLinkClick = () => {
    setAnimation("slide-out");
    setTimeout(() => setIsOpen(false), 300); // Match the duration of the slide-out animation
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="text-gray-500 hover:text-gray-700 focus:outline-none py-2"
        aria-label="Toggle menu"
      >
        <div className="flex my-2 gap-2">
          <Menu className="h-6 w-6" />
          <div className="-mt-1.5">
            <Logo />
          </div>
        </div>
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={toggleMenu}
        >
          <div
            className={`absolute left-0 top-0 bottom-0 w-64 bg-white shadow-lg ${animation} flex flex-col`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 flex justify-between items-center">
              <Logo />
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-5 flex-1 overflow-auto">
              {menuList.map((menu) => (
                <Link
                  href={menu.path}
                  key={menu.name}
                  className={cn(
                    "flex items-center gap-2 p-3 hover:bg-primary hover:text-white cursor-pointer",
                    path === menu.path && "bg-primary text-white"
                  )}
                  onClick={handleLinkClick}
                >
                  <menu.icon className="h-5 w-5" />
                  <span>{menu.name}</span>
                </Link>
              ))}
            </nav>
            <div className="p-5 border-t mt-auto">{AIUsageComponent}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
