import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const PhotoContainer: FC<Props> = ({ children }) => (
  <div
    style={{
      margin: "16px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    }}
  >
    {children}
  </div>
);
