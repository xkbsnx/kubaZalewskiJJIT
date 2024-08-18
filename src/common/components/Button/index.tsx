import { FC, PropsWithChildren } from "react";
import { ButtonProps } from "@mui/material";
import { StyledButton } from "./styled";

interface Props extends PropsWithChildren, ButtonProps {
  buttontype: "primary" | "soft";
}

const Button: FC<Props> = (props) => {
  const { buttontype, children, ...rest } = props;
  return <StyledButton {...{ buttontype, ...rest }}>{children}</StyledButton>;
};

export default Button;
