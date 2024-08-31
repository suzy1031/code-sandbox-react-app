import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { fetchPhotos } from "../redux/slice/photos";
import { Link } from "react-router-dom";

export const Photos = () => {
  // 自作したhookを使う react-reduxのhookを使うと、callbackが型エラーする
  const dispatch = useAppDispatch();
  const { data, status, error } = useAppSelector((state) => state.photos);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  return (
    <>
      <h1>Photos</h1>
      <Link to="/">Home</Link>
      {status === "succeeded" && (
        <div
          style={{
            margin: "16px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {data.map((i) => (
            <div key={i.id}>
              <img
                src={i.url}
                alt={i.title}
                style={{ width: "50px", height: "50px" }}
              />
            </div>
          ))}
        </div>
      )}
      {status === "pending" && <div>Loading...</div>}
      {status === "failed" && <div>{error}</div>}
    </>
  );
};
