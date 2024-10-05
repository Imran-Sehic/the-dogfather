import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { ListingCard } from "../components/ListingCard";
import useTailwindBreakpoint from "../hooks/useTailwindBreakpoints";
import { MainLayout } from "../layouts/MainLayout";
import { ResponseRecordType } from "../types";
import { InfoBanner } from "../util-components/InfoBanner";

export const DislikedListing: React.FC = () => {
  const screenSize = useTailwindBreakpoint();
  const isMobile = screenSize == "xs";

  const likedDogsRaw = localStorage.getItem("liked-dogs");
  const likedDogsParsed: ResponseRecordType[] =
    (likedDogsRaw && JSON.parse(likedDogsRaw)) || [];

  const dislikedDogsRaw = localStorage.getItem("disliked-dogs");
  const dislikedDogsParsed: ResponseRecordType[] =
    (dislikedDogsRaw && JSON.parse(dislikedDogsRaw)) || [];
  return (
    <MainLayout>
      <div>
        <p className="m-10 text-slate-500 font-semibold text-3xl">
          Disliked Listing
        </p>
        <div className={`${isMobile ? "p-2" : "p-10"} pt-0`}>
          <div className="flex flex-col gap-5 mb-5">
            {dislikedDogsParsed.length > 0 ? (
              dislikedDogsParsed?.map((breed) => {
                return (
                  <ListingCard
                    key={`${breed.id}${breed.breeds[0].id}`}
                    breed={breed}
                    isLiked={false}
                    isDisliked={true}
                    dogs={{
                      liked: likedDogsParsed,
                      disliked: dislikedDogsParsed,
                    }}
                    refresh
                  />
                );
              })
            ) : (
              <InfoBanner
                content="No dogs to show!"
                icon={<InformationCircleIcon className="w-6 text-slate-400" />}
              />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
