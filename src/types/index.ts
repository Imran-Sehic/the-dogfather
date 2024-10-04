export type ResponseType = {
  id: string;
  breeds: DogType[];
  url: string;
  height: number;
  width: number;
};

export type DogType = {
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  country_code?: string;
  height: {
    imperial: string;
    metric: string;
  };
  weight: {
    imperial: string;
    metric: string;
  };
  life_span: string;
  reference_image_id: string;
  temperament: string;
};
