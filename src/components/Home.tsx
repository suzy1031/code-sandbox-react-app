import { useAppDispatch, useAppSelector } from "../redux/store";
import { decrease, increase } from "../redux/slice/counter";
import { Title } from "./ui/Title";
import { CustomLink } from "./ui/CustomLink";

export const Home = () => {
  // 自作したhookを使う react-reduxのhookを使うと、callbackが型エラーする
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Title title="Home" />
      <CustomLink to="/about" label="About" />
      <br />
      <CustomLink to="/photos" label="Photos" />
      <div>{count}</div>
      <button onClick={() => dispatch(increase())}>UP</button>
      <button onClick={() => dispatch(decrease())}>DOWN</button>
    </div>
  );
};
