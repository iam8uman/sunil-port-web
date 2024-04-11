"use client";

import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { MenuSquareIcon, X } from "lucide-react";
import Link from "next/link";
import SwitchDark from "@/components/SwitchDark";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-200 text-black sticky top-0 z-10 dark:bg-gray-950 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                className="h-12 w-auto"
                src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/logo.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuSquareIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <nav className="hidden md:flex space-x-4 items-center">
            {links.map((link) => (
              <a
                key={link.text}
                href={link.url}
                className="text-gray-500 hover:text-gray-900"
              >
                {link.text}
              </a>
            ))}
            <SwitchDark />
          </nav>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref: React.LegacyRef<HTMLDivElement> | undefined) => (
          <div className="md:hidden" ref={ref}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <a
                  key={link.text}
                  href={link.url}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </header>
  );
};

const links = [
  { text: "About", url: "/about" },
  { text: "Portfolio", url: "/portfolio" },
  { text: "Blog", url: "/blog" },
  { text: "Contact", url: "/contact" },
];

export default Header;
