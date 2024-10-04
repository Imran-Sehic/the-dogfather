import { useFetchDogs } from "../queries/useFetchDogs";

export const MainListing: React.FC = () => {
  const { data, isLoading, isError } = useFetchDogs(1);

  return (
    <div>
      Main Listing
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>{data?.[0].breeds[0].name}</div>
      )}
    </div>
  );
};
