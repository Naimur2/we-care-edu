import React from "react";
import { useEffect } from "react";
import { getCategories, getVideos } from "../api/videos";

export default function useGetCategories() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    setIsLoading(true);

    getCategories()
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });

    return () => {
      setData(null);
      setError(null);
      setIsLoading(false);
    };
  }, []);

  return { isLoading, data, error };
}
