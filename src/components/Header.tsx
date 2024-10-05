import { Bars3Icon } from "@heroicons/react/24/solid";
import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface HeaderInterface {
  isMobile: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderInterface> = ({ isMobile, setIsOpen }) => {
  return (
    <div className="flex justify-between items-center bg-white sticky top-0 p-2 border-b shadow border-b-blue-300">
      {isMobile ? (
        <Bars3Icon
          className="w-6 text-blue-400"
          onClick={() => setIsOpen(true)}
        />
      ) : (
        <div />
      )}
      <Link className="text-2xl font-custom mb-2 text-blue-400" to="/">
        The Dogfather
      </Link>
    </div>
  );
};
