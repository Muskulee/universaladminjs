"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Image,
  Link,
  Button,
} from "@nextui-org/react";
import { useState } from "react";

const GeneralNav = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["About", "Dashboard", "Pricing", "FAQ", "Contact"];

  return (
    <Navbar
      maxWidth="full"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className=""
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3 " justify="center">
        <NavbarBrand>
          <Image
            width={60}
            height={""}
            src="/assets/logo.png"
            className="hover:animate-spin"
            alt="logo"
          />
          {/* <p className="font-bold text-inherit">Admin</p> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Image
            width={60}
            height={""}
            src="/assets/logo.png"
            className="hover:animate-spin"
            alt="Website Logo"
          />
          {/* <p className="font-bold text-inherit">Admin</p> */}
        </NavbarBrand>
        <NavbarItem isActive>
          <Link
            href="/"
            isBlock
            color="danger"
            aria-current="page"
            // onPress={() => {
            //   console.log("mmmmmm", "mmmmmm");
            // }}
            className="hover:animate-spin"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="danger" isBlock href="/dashboard">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="danger" isBlock href="/pricing">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="danger" isBlock href="/faq">
            FAQ
          </Link>
          <Link color="danger" isBlock href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link
            isBlock
            href="/login"
            color="secondary"
            className="text-black text-lg"
          >
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="secondary"
            isBlock
            href="/register"
            variant="flat"
            className="bg-gradient-to-tr from-pink-500 to-purple-500 text-white shadow-lg"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              underline="active"
              color={"danger"}
              href={`${item.toLowerCase()}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default GeneralNav;
