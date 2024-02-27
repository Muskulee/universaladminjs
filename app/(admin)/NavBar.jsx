import { BiTransfer } from "react-icons/bi";
// import Link from "next/link";
import { Link, Button } from "@nextui-org/react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./ListBox";
import { BiSolidDashboard } from "react-icons/bi";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { MdOutlineSettingsApplications } from "react-icons/md";

const NavItem = ({ to, value, closed, Icon }) => {
  // console.log("closed", closed);
  const commonClasses =
    "flex items-center space-x-2 w-full p-2 block whitespace-nowrap";
  const activeClass = commonClasses + " bg-swatch_2a text-swatch_6a";
  const inActiveClass = commonClasses + "  text-swatch_2a";
  return (
    <>
      <Button color="primary" startContent={Icon}>
        <span
          className={
            closed
              ? "w-0 transition-width overflow-hidden"
              : "w-full transition-width"
          }
        >
          {value}
        </span>
      </Button>
    </>
  );
};

export default function MyNavbar({ closed, setLogOut, logo }) {
  return (
    <>
      <nav className="bg-white dark:bg-darkblack-500 ">
        <div className="flex justify-center mt-2 ">{logo}</div>

        <ListboxWrapper>
          <Listbox
            aria-label="Actions"
            // onAction={(key) => alert(key)}
            color="danger"
          >
            <ListboxItem
              key="dashboard"
              href="/dashboard"
              shouldHighlightOnFocus
              startContent={<BiSolidDashboard size={24} />}
            >
              Dashboard
            </ListboxItem>

            <ListboxItem
              key="setting"
              href="/setting"
              shouldHighlightOnFocus
              startContent={<MdOutlineSettingsApplications size={24} />}
            >
              Setting
            </ListboxItem>

            <ListboxItem
              key="logout"
              className="text-danger"
              href="/login"
              color="danger"
              startContent={<RiLogoutCircleRFill size={24} />}
            >
              Logout
            </ListboxItem>
          </Listbox>
        </ListboxWrapper>
      </nav>
    </>
  );
}
