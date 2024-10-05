import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { ListingCard } from "../components/ListingCard";
import useTailwindBreakpoint from "../hooks/useTailwindBreakpoints";
import { MainLayout } from "../layouts/MainLayout";
import { useFetchDogs } from "../queries/useFetchDogs";
import { ResponseRecordType } from "../types";
import { InfoBanner } from "../util-components/InfoBanner";
import { Pagination } from "../util-components/Pagination";
import { Spinner } from "../util-components/Spinner";

export const MainListing: React.FC = () => {
  const screenSize = useTailwindBreakpoint();
  const isMobile = screenSize == "xs";

  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useFetchDogs(page);

  const likedDogsRaw = localStorage.getItem("liked-dogs");
  const likedDogsParsed: ResponseRecordType[] =
    (likedDogsRaw && JSON.parse(likedDogsRaw)) || [];

  const dislikedDogsRaw = localStorage.getItem("disliked-dogs");
  const dislikedDogsParsed: ResponseRecordType[] =
    (dislikedDogsRaw && JSON.parse(dislikedDogsRaw)) || [];

  const [likedDogsState, setLikedDogsState] = useState(likedDogsParsed);
  const [dislikedDogsState, setDislikedDogsState] =
    useState(dislikedDogsParsed);

  return (
    <MainLayout>
      <div>
        <p className="m-10 text-slate-500 font-semibold text-3xl">
          Main Listing
        </p>
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          <InfoBanner
            content="An error has occured!"
            icon={<InformationCircleIcon className="w-6 text-red-500" />}
          />
        ) : (
          <div className={`${isMobile ? "p-2" : "p-10"} pt-0`}>
            <div className="flex flex-col gap-5 mb-5">
              {data?.map((breed) => {
                const isLiked = likedDogsParsed.find(
                  (dog) =>
                    dog.id + dog.breeds[0].id == breed.id + breed.breeds[0].id
                );

                const isDisliked = dislikedDogsParsed.find(
                  (dog) =>
                    dog.id + dog.breeds[0].id == breed.id + breed.breeds[0].id
                );
                return (
                  <ListingCard
                    key={`${breed.id}${breed.breeds[0].id}`}
                    breed={breed}
                    isLiked={isLiked != undefined}
                    isDisliked={isDisliked != undefined}
                    dogs={{
                      liked: likedDogsState,
                      disliked: dislikedDogsState,
                    }}
                    setLikedDogs={setLikedDogsState}
                    setDislikedDogs={setDislikedDogsState}
                  />
                );
              })}
            </div>
            <Pagination
              page={page}
              setPage={setPage}
              recordsPerPage={data?.length || 0}
            />
          </div>
        )}
      </div>
    </MainLayout>
  );
};
