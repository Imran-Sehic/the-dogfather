import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { apiKey } from "../constants";
import { ResponseRecordType } from "../types";

const fetchDogs = async (page: number): Promise<ResponseRecordType[]> => {
  const res = await axios.get(
    `https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=${page}&limit=10`,
    {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
    }
  );
  return res.data as ResponseRecordType[];
};

export const useFetchDogs = (page: number) => {
  const res = useQuery<ResponseRecordType[]>({
    queryFn: () => fetchDogs(page),
    queryKey: ["dogs", page],
  });

  return res;
};
