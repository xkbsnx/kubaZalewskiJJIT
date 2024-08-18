import { FC, PropsWithChildren } from "react";
import { ButtonProps } from "@mui/material";
import { StyledButton } from "./styled";

interface Props extends PropsWithChildren, ButtonProps {
  buttonType: "primary" | "soft";
}

const Button: FC<Props> = (props) => {
  const { buttonType, children, ...rest } = props;
  return <StyledButton {...{ buttonType, ...rest }}>{children}</StyledButton>;
};

export default Button;
