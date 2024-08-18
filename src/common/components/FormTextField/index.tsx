import { FC } from "react";
import { TextFieldProps } from "@mui/material/TextField";

import {
  TextFieldContainer,
  TextFieldLabel,
  StyledMUITextField,
} from "./styled";

export type CustomTextFieldProps = TextFieldProps & {
  label?: string;
};

const TextField: FC<CustomTextFieldProps> = (props) => {
  const { label, ...textFieldProps } = props;

  return (
    <TextFieldContainer>
      <TextFieldLabel fontSize="14px">{label}</TextFieldLabel>
      <StyledMUITextField {...textFieldProps} />
    </TextFieldContainer>
  );
};

export default TextField;
