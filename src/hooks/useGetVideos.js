import React from "react";
import { useEffect } from "react";
import { getVideos } from "../api/videos";

export default function useGetVideos(args) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    setIsLoading(true);

    getVideos(args)
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
  }, [args]);

  return { isLoading, data, error };
}
