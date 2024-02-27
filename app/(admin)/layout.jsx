"use client";

import React, { ReactNode, useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { COLORS } from "./../_lib/colors";
import MyNavbar from "./NavBar";
import { SearchIcon } from "./SearchIcon";
import { IoMdPersonAdd } from "react-icons/io";

import { Button, ButtonGroup, Image } from "@nextui-org/react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
  Avatar,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Checkbox,
  Link,
} from "@nextui-org/react";
import { useSelector } from "react-redux";
import { BiLock, BiUserCircle } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const DashBoardLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { id, name, email } = useSelector((state) => state.user);

  const [closedNav, setClosedNav] = useState(true);

  const toggleNav = () => {
    setClosedNav(!closedNav);
  };

  const getNavWidth = () => (closedNav ? "w-16" : "w-56");

  return (
    <>
      <div className="flex bg-white dark:bg-darkblack-500">
        <div
          className={
            getNavWidth() +
            " min-h-screen transition-width border border-right border-white dark:border-darkblack-500 ml-2 bg-white dark:bg-darkblack-500"
            // " min-h-screen bg-colors-swatch_1 transition-width border border-right"
          }
        >
          <div className="sticky top-2">
            <MyNavbar
              closed={closedNav}
              setLogOut={() => {}}
              logo={
                <Image
                  width={60}
                  height={""}
                  src="/assets/logo.png"
                  alt="Logo"
                />
              }
            />
          </div>
        </div>
        <div className="flex-1 min-h-screen">
          {/* // bg-swatch_1 */}
          {/* <div className="sticky top-0 justify-between"> */}
          <div className="flex item-center p-2 space-x-2">
            <Navbar
              isBordered
              className="flex-0 justify-between flex-end"
              maxWidth="full"
            >
              <button onClick={toggleNav}>
                {closedNav ? (
                  <AiOutlineMenuUnfold size="25" color={COLORS.swatch_2a} />
                ) : (
                  <AiOutlineMenuFold size="25" color={COLORS.swatch_4a} />
                )}
              </button>

              <NavbarContent className="hidden lg:flex flex-grow gap-4 ml-auto">
                {/* <NavbarItem>
                  <Link color="foreground" href="#">
                    More Links
                  </Link>
                </NavbarItem> */}
                <NavbarItem isActive></NavbarItem>

                <NavbarItem>
                  {/* <Link color="foreground" href="#">
                  Integrations
                </Link> */}
                </NavbarItem>
              </NavbarContent>
              <div className="flex items-center justify-end p-6 lg:px-8">
                <NavbarContent
                  as="div"
                  className="flex items-center justify-end"
                >
                  <Button
                    onPress={onOpen}
                    variant="bordered"
                    isIconOnly
                    color="success"
                    aria-label="Like"
                  >
                    <IoMdPersonAdd size={20} color={COLORS.swatch_2} />
                  </Button>
                  <Input
                    classNames={{
                      base: "max-w-full sm:max-w-[10rem] h-10",
                      mainWrapper: "h-full",
                      input: "text-small",
                      inputWrapper:
                        "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<SearchIcon size={18} />}
                    type="search"
                  />
                  <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                      <Avatar
                        isBordered
                        as="button"
                        className="transition-transform"
                        color="secondary"
                        name="Test Admin"
                        size="sm"
                        src="https://i.pravatar.cc/150?u=a042581fs4e29026704d"
                      />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                      <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-semibold">Signed in as</p>
                        <p className="font-semibold">admin@example.com</p>
                      </DropdownItem>
                      <DropdownItem key="settings" href="/setting">
                        My Settings
                      </DropdownItem>
                      <DropdownItem key="team_settings" href="/setting">
                        Team Settings
                      </DropdownItem>

                      <DropdownItem key="logout" color="danger" href="login">
                        Log Out
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavbarContent>
              </div>
            </Navbar>
          </div>
          <div className="px-8">{children}</div>
        </div>
      </div>
      <Modal
        backdrop="blur"
        shadow="lg"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        scrollBehavior="inside"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add New User
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <BiUserCircle className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  type="text"
                  label="Full Name"
                  placeholder="Enter user's Full Name"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <MdEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  type="email"
                  placeholder="Enter user's email"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <BiLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter user's password"
                  type="password"
                  variant="bordered"
                />
                {/* <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div> */}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="secondary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default DashBoardLayout;
