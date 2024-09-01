import { FC } from "react";

type Props = {
  status: "idle" | "succeeded" | "pending" | "failed";
  error?: string;
};

export const Loading: FC<Props> = ({ status, error }) => {
  if (status === "succeeded" || status === "idle") return <></>;

  return (
    <>{status === "failed" ? <div>{error}</div> : <div>Loading...</div>}</>
  );
};
