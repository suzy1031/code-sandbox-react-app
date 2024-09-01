import { FC } from "react";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  label: string;
};
export const CustomLink: FC<Props> = ({ to, label }) => (
  <Link to={to}>{label}</Link>
);
