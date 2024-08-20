import { forwardRef } from "react";
import { TextFieldProps } from "@mui/material/TextField";

import {
  TextFieldContainer,
  TextFieldLabel,
  StyledMUITextField,
} from "./styled";

export type CustomTextFieldProps = TextFieldProps & {
  label?: string;
};

const TextField = forwardRef<HTMLElement, CustomTextFieldProps>(
  (props, ref) => {
    const { label, ...textFieldProps } = props;

    return (
      <TextFieldContainer>
        <TextFieldLabel fontSize="12px">{label}</TextFieldLabel>
        <StyledMUITextField {...textFieldProps} inputRef={ref} />
      </TextFieldContainer>
    );
  },
);

export default TextField;
