import Link from "next/link";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full px-6 py-4 bg-transparent flex items-center justify-between z-50">
            
            {/* LOGO CONTENT */}
            <div className="flex items-center">
                <h2 className="text-black text-xl sm:text-2xl font-bold font-serif">Cloudy&nbsp;
                  <span className="text-rose-400 text-xl sm:text-2xl font-bold font-serif">Cones</span>
               </h2>
            </div>
            {/* LINK MENU for Desktop */}
            <div className="hidden md:flex flex-1 justify-center space-x-6 text-black text-lg">
                <Link href="/" className="hover:text-rose-500">Home</Link>
                <Link href="/product" className="hover:text-rose-500">Product</Link>
                <Link href="/about" className="hover:text-rose-500">About</Link>
                <Link href="/contact" className="hover:text-rose-500">Contact</Link>
            </div>

            {/* MENU CONTENT for Mobile */}
            <Sheet>
                <SheetTrigger className="md:hidden">
                    <Menu className="text-rose-500 w-8 h-8" />
                </SheetTrigger>
                <SheetContent className="bg-white text-rose-500">
                    {/* Logo */}
                    <div className="flex items-center">
                <h2 className="text-black text-xl sm:text-2xl font-bold font-serif">Cloudy&nbsp;
                  <span className="text-rose-400 text-xl sm:text-2xl font-bold font-serif">Cones</span>
               </h2>
            </div>
                    <ul className="mt-4 space-y-4 text-lg px-4">
                        <li>
                            <SheetClose asChild>
                                <Link href="/" className="hover:text-rose-500">Home</Link>
                            </SheetClose>
                        </li>
                        <li>
                            <SheetClose asChild>
                                <Link href="/product" className="hover:text-rose-500">Product</Link>
                            </SheetClose>
                        </li>
                        <li>
                            <SheetClose asChild>
                                <Link href="/about" className="hover:text-rose-500">About</Link>
                            </SheetClose>
                        </li>
                        <li>
                            <SheetClose asChild>
                                <Link href="/contact" className="hover:text-rose-500">Contact</Link>
                            </SheetClose>
                        </li>
                    </ul>
                </SheetContent>
            </Sheet>
        </header>
    );
}