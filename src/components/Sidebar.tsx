import {
  ArrowUturnLeftIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  QueueListIcon,
  UserCircleIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Dispatch, SetStateAction } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context-providers/UserContext";
import { Button } from "../util-components/Button";

interface SidebarInterface {
  isMobile: boolean;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Sidebar: React.FC<SidebarInterface> = ({
  isMobile,
  isOpen,
  setIsOpen,
}) => {
  const { username, setUsername } = useUser();
  const navigate = useNavigate();

  const pathname = window.location.pathname;

  return (
    <div
      className={`h-full w-full ${
        isMobile ? (isOpen ? "absolute z-50 animate-fade-in" : "hidden") : ""
      } grid grid-rows-[auto_auto_1fr] text-white bg-gradient-to-r from-blue-500 to-blue-400`}
    >
      <div className="flex gap-2 border-b p-3">
        <UserCircleIcon className="w-4" />
        <p>{username}</p>
        <XMarkIcon
          className="w-4 ml-auto text-white"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <div className="flex flex-col gap-3 pt-5 text-xl">
        <Link
          to={"/"}
          className={`flex gap-2 ${
            pathname == "/" ? "bg-blue-400" : ""
          } pl-5 py-1 hover:bg-blue-400 transition`}
        >
          <QueueListIcon className="w-5" />
          <p>Listing</p>
        </Link>
        <Link
          to={"/liked-listing"}
          className={`flex gap-2 ${
            pathname == "/liked-listing" ? "bg-blue-400" : ""
          } pl-5 py-1 hover:bg-blue-400 transition`}
        >
          <HandThumbUpIcon className="w-5" />
          <p>Liked</p>
        </Link>
        <Link
          to={"/disliked-listing"}
          className={`flex gap-2 ${
            pathname == "/disliked-listing" ? "bg-blue-400" : ""
          } pl-5 py-1 hover:bg-blue-400 transition`}
        >
          <HandThumbDownIcon className="w-5" />
          <p>Disliked</p>
        </Link>
        <Link
          to={"/about-us"}
          className={`flex gap-2 ${
            pathname == "/about-us" ? "bg-blue-400" : ""
          } pl-5 py-1 hover:bg-blue-400 transition`}
        >
          <UserGroupIcon className="w-5" />
          <p>About Us</p>
        </Link>
      </div>
      <Button
        onClick={() => {
          setUsername("");
          navigate("/login");
        }}
        className="flex justify-center items-center border-2 rounded py-1 gap-2 m-2 mt-auto hover:bg-blue-400 transition"
        icon={<ArrowUturnLeftIcon className="w-5" />}
      >
        Logout
      </Button>
    </div>
  );
};
