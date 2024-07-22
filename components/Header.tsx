import Link from "next/link";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-30 bg-white w-full text-black shadow-lg animate-slideDown animate-fadeIn">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="https://res.cloudinary.com/dypvfvu6i/image/upload/v1721618698/BUTLI/BUTLI_Black_Logo_-removebg_mjdcax.png"
            alt="BUTLI Logo"
            width={60}
            height={60}
            className="h-20 w-20"
          />
          <h1 className="hidden lg:block text-2xl font-bold">
            BuiltUp Leadership Institute
          </h1>
          <h1 className="lg:hidden text-3xl font-bold">BUTLI</h1>
        </div>

        <nav className="space-x-4 hidden md:flex text-sm">
          <Link href="#" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#about" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#courses" className="hover:underline" prefetch={false}>
            Courses
          </Link>
          <Link href="#calendar" className="hover:underline" prefetch={false}>
            Calendar
          </Link>
          <Link href="#contact" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>

        <Button variant="outline" className="md:hidden bg-transparent">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
