export type TGetPhotosArgs = {
  category?: string;
  subCategory?: string;
  page?: number;
  limit?: number;
};


export interface TGetPhotosRes {
  message: string;
  data: TGetPhotos[];
  meta: Meta;
}

export interface TGetPhotos {
  _id: string;
  url: string;
  category: string;
  subCategory: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Meta {
  total: number;
  page: string;
  limit: string;
  maximumPage: number;
}
