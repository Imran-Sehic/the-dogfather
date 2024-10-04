import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <div className="flex justify-end p-2 border-b shadow border-b-blue-300">
      <Link className="text-2xl font-custom mb-2 text-blue-400" to="/">
        The Dogfather
      </Link>
    </div>
  );
};
