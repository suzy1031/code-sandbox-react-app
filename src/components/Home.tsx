import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { decrease, increase } from "../redux/slice/counter";

export const Home = () => {
  // 自作したhookを使う react-reduxのhookを使うと、callbackが型エラーする
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <div style={{ width: "100%" }}>
      <h1>Home</h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/photos">Photos</Link>
      <div>{count}</div>
      <button onClick={() => dispatch(increase())}>UP</button>
      <button onClick={() => dispatch(decrease())}>DOWN</button>
    </div>
  );
};
