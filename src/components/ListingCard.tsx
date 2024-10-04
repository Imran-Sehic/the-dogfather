import { ResponseRecordType } from "../types";

interface ListingCardInterface {
  breed: ResponseRecordType;
}

export const ListingCard: React.FC<ListingCardInterface> = ({ breed }) => {
  return <div></div>;
};
