import HeaderAuth from "@/components/header-auth";
import SearchInput from "@/components/search-input";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { Suspense } from "react";

export default function Header() {
  return (
    <Navbar className="shadow mb-6 bg-orange-500 w-100%">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discussões
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
