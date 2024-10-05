import { HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";
import { Dispatch, SetStateAction, useState } from "react";
import CountryFlag from "react-country-flag";
import { ResponseRecordType } from "../types";

interface ListingCardInterface {
  breed: ResponseRecordType;
  isLiked: boolean;
  isDisliked: boolean;
  dogs: {
    liked: ResponseRecordType[];
    disliked: ResponseRecordType[];
  };
  setLikedDogs?: Dispatch<SetStateAction<ResponseRecordType[]>>;
  setDislikedDogs?: Dispatch<SetStateAction<ResponseRecordType[]>>;
  refresh?: boolean;
}

export const ListingCard: React.FC<ListingCardInterface> = ({
  breed,
  isLiked,
  isDisliked,
  dogs,
  setDislikedDogs,
  setLikedDogs,
  refresh,
}) => {
  const [showPersonalities, setShowPersonalities] = useState(false);
  const [isLikedState, setIsLikedState] = useState(isLiked);
  const [isDislikedState, setIsDislikedState] = useState(isDisliked);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div
      className="border border-b-2 border-b-blue-400 p-2 shadow-xl cursor-pointer transition rounded-t hover:bg-blue-100"
      onClick={() => setShowPersonalities(!showPersonalities)}
    >
      <div className="flex items-start gap-2">
        {!isImageLoaded && (
          <div className="w-[50px] h-[50px] rounded-full animate-shimmer mr-5 bg-blue-200 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 bg-[length:200%_100%]"></div>
        )}
        <img
          src={breed.url}
          alt={`image_for_${breed.breeds[0].name}`}
          onLoad={() => setIsImageLoaded(true)}
          className={`${
            isImageLoaded ? "block" : "hidden"
          } w-[50px] h-[50px] rounded-full mr-5`}
        />
        <div className="flex flex-col">
          <div className="flex gap-2">
            <p className="font-bold text-blue-400">{breed.breeds[0].name}</p>
            {breed.breeds[0].breed_group && (
              <p className="text-slate-400">({breed.breeds[0].breed_group})</p>
            )}
            {breed.breeds[0].country_code && (
              <CountryFlag
                countryCode={breed.breeds[0].country_code}
                svg
                className="w-5 mt-1"
              />
            )}
          </div>
          <div>
            <p className="text-sm">
              <span className="text-xs text-slate-500">Purpose:</span>{" "}
              <span className="text-blue-500">
                {breed.breeds[0].bred_for || "Just a dog"}
              </span>
            </p>
            <p className="text-sm">
              <span className="text-xs text-slate-500">Lifespan:</span>{" "}
              <span className="text-blue-500">{breed.breeds[0].life_span}</span>
            </p>
            {showPersonalities && breed.breeds[0].temperament && (
              <div className="mt-2">
                <p className="text-xs text-slate-500 mb-1">Personalities</p>
                <div className="animate-fade-in transition flex gap-2 flex-wrap">
                  {breed.breeds[0].temperament.split(",").map((item) => (
                    <div className="rounded px-2 bg-blue-300 text-white">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-2 items-start ml-auto">
          <HandThumbUpIcon
            className={`w-6 ${
              isLikedState ? "text-green-500" : "text-blue-200"
            } hover:text-green-500 transition`}
            onClick={(e) => {
              e.stopPropagation();
              if (isLikedState) {
                setIsLikedState(false);
                const filtered = dogs.liked.filter(
                  (b) => b.id + b.breeds[0].id != breed.id + breed.breeds[0].id
                );
                localStorage.setItem("liked-dogs", JSON.stringify(filtered));
                setLikedDogs && setLikedDogs(filtered);
              } else {
                setIsLikedState(true);
                localStorage.setItem(
                  "liked-dogs",
                  JSON.stringify([...dogs.liked, breed])
                );
                setLikedDogs && setLikedDogs([...dogs.liked, breed]);
                if (isDislikedState) {
                  const filtered = dogs.disliked.filter(
                    (b) =>
                      b.id + b.breeds[0].id != breed.id + breed.breeds[0].id
                  );
                  localStorage.setItem(
                    "disliked-dogs",
                    JSON.stringify(filtered)
                  );
                  setDislikedDogs && setDislikedDogs(filtered);
                  setIsDislikedState(false);
                }
              }
              refresh && window.location.reload();
            }}
          />
          <HandThumbDownIcon
            className={`w-6 ${
              isDislikedState ? "text-red-500" : "text-blue-200"
            } hover:text-red-500 transition`}
            onClick={(e) => {
              e.stopPropagation();
              if (isDislikedState) {
                setIsDislikedState(false);
                const filtered = dogs.disliked.filter(
                  (b) => b.id + b.breeds[0].id != breed.id + breed.breeds[0].id
                );
                localStorage.setItem("disliked-dogs", JSON.stringify(filtered));
                setDislikedDogs && setDislikedDogs(filtered);
              } else {
                setIsDislikedState(true);
                localStorage.setItem(
                  "disliked-dogs",
                  JSON.stringify([...dogs.disliked, breed])
                );
                setDislikedDogs && setDislikedDogs([...dogs.disliked, breed]);
                if (isLikedState) {
                  const filtered = dogs.liked.filter(
                    (b) =>
                      b.id + b.breeds[0].id != breed.id + breed.breeds[0].id
                  );
                  localStorage.setItem("liked-dogs", JSON.stringify(filtered));
                  setLikedDogs && setLikedDogs(filtered);
                  setIsLikedState(false);
                }
              }
              refresh && window.location.reload();
            }}
          />
        </div>
      </div>
    </div>
  );
};
