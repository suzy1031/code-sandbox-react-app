import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchPhotos } from "../../redux/slice/photos";

export const usePhotos = () => {
  // 自作したhookを使う react-reduxのhookを使うと、callbackが型エラーする
  const dispatch = useAppDispatch();
  const { data, status, error } = useAppSelector((state) => state.photos);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  return { data, status, error };
};
