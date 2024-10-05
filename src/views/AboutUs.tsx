import { FaceSmileIcon } from "@heroicons/react/24/solid";
import { MainLayout } from "../layouts/MainLayout";

export const AboutUs: React.FC = () => {
  return (
    <MainLayout>
      <div className="p-10 flex text-center flex-col items-center">
        <p>
          <b className="text-blue-300">The Dogfather</b> is a weblisting for
          dogs founded in 2024 with the intent to connect dog lovers to a large
          listing of dogs and give the ability to like or dislike some of them.
        </p>
        <p className="flex gap-2">
          Enjoy using our platform{" "}
          <FaceSmileIcon className="w-6 text-yellow-400" />
        </p>
      </div>
    </MainLayout>
  );
};
