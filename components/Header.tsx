import Link from "next/link";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-30 bg-white w-full text-black shadow-lg animate-slideDown animate-fadeIn">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="https://res.cloudinary.com/dypvfvu6i/image/upload/v1721903081/BUTLI/logo_qdxn1g.png"
            alt="BUTLI Logo"
            width={70}
            height={70}
          />
          <h1 className="text-lg font-extrabold text-[#428c9d]">
            BuiltUp
            <br /> Leadership Institute
          </h1>
        </div>

        <nav className="space-x-4 hidden md:flex text-sm">
          <Link
            href="#"
            className="hover:underline hover:text-[#428c9d]"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:underline hover:text-[#428c9d]"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#programs"
            className="hover:underline hover:text-[#428c9d]"
            prefetch={false}
          >
            Programs
          </Link>
          <Link
            href="#calendar"
            className="hover:underline hover:text-[#428c9d]"
            prefetch={false}
          >
            Calendar
          </Link>
          <Link
            href="#contact"
            className="hover:underline hover:text-[#428c9d]"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>

        <Popover>
          <PopoverTrigger className="md:hidden">
            <MenuIcon className="h-8 w-8" />
          </PopoverTrigger>
          <PopoverContent className="max-w-28 mr-8">
            <nav className="space-y-4 flex flex-col text-sm">
              <Link
                href="#"
                className="hover:underline hover:text-[#428c9d]"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="hover:underline hover:text-[#428c9d]"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="#courses"
                className="hover:underline hover:text-[#428c9d]"
                prefetch={false}
              >
                Courses
              </Link>
              <Link
                href="#calendar"
                className="hover:underline hover:text-[#428c9d]"
                prefetch={false}
              >
                Calendar
              </Link>
              <Link
                href="#contact"
                className="hover:underline hover:text-[#428c9d]"
                prefetch={false}
              >
                Contact
              </Link>
            </nav>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
