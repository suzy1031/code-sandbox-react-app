import { FC } from "react";

type Props = {
  title: string;
};

export const Title: FC<Props> = ({ title }) => <h1>{title}</h1>;
