import HeaderAuth from "@/components/header-auth";
import SearchInput from "@/components/search-input";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Header() {
  return (
    <Navbar className="shadow  mb-6 bg-[#6ca66e] w-100%">
      <NavbarBrand px-0>
        <Link href="/" className="font-bold flex items-center">
          <Image
            src="/favicon.ico"
            alt="logo"
            className="hidden  lg:block"
            width={64}
            height={64}
          />{" "}
          Ring Life
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
