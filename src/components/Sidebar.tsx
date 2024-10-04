import {
  ArrowUturnLeftIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  QueueListIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context-providers/UserContext";
export const Sidebar: React.FC = () => {
  const { username, setUsername } = useUser();
  const navigate = useNavigate();

  return (
    <div className="h-full grid grid-rows-[auto_auto_1fr] p-3 text-white bg-blue-300">
      <div className="flex gap-2 border-b pb-3">
        <UserIcon className="w-4" />
        <p>{username}</p>
      </div>
      <div className="flex flex-col gap-3 pl-2 pt-5 text-xl">
        <Link to={"/"} className="flex gap-2">
          <QueueListIcon className="w-5" />
          <p>Listing</p>
        </Link>
        <Link to={"/liked-listing"} className="flex gap-2">
          <HandThumbUpIcon className="w-5" />
          <p>Liked</p>
        </Link>
        <Link to={"/disliked-listing"} className="flex gap-2">
          <HandThumbDownIcon className="w-5" />
          <p>Disliked</p>
        </Link>
        <Link to={"/about-us"} className="flex gap-2">
          <UserGroupIcon className="w-5" />
          <p>About Us</p>
        </Link>
      </div>
      <button
        className="flex justify-center items-center border-2 rounded py-1 gap-2 m-2 mt-auto"
        onClick={() => {
          setUsername("");
          navigate("/login");
        }}
      >
        <ArrowUturnLeftIcon className="w-5" />
        Logout
      </button>
    </div>
  );
};
