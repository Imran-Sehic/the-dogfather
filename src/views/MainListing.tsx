import { ListingCard } from "../components/ListingCard";
import { MainLayout } from "../layouts/MainLayout";
import { useFetchDogs } from "../queries/useFetchDogs";

export const MainListing: React.FC = () => {
  const { data, isLoading, isError } = useFetchDogs(1);

  return (
    <MainLayout>
      <div>
        Main Listing
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {data?.map((breed) => (
              <ListingCard breed={breed} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};
