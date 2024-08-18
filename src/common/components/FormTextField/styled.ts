import { styled, Typography, Box } from "@mui/material";
import MUITextField from "@mui/material/TextField";
import { CustomTextFieldProps } from ".";

export const StyledMUITextField = styled(MUITextField)<CustomTextFieldProps>(
  ({ theme }) => ({
    borderRadius: "2px",

    p: {
      margin: 0,
      fontSize: "10px",
    },

    input: {
      fontSize: "14px",
      color: theme.palette.grey_.grey_100,
    },

    "&:hover .MuiInputBase-root": {
      border: `1px solid ${theme.palette.primary_.primary}`,
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${theme.palette.primary_.primary}`,
      boxShadow: "0px 0px 0px 4px #9747FF40",
    },

    "& ::placeholder": {
      color: theme.palette.grey_.grey_200,
    },
  }),
);

export const TextFieldContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 88px;
`;

export const TextFieldLabel = styled(Typography)`
  margin-bottom: 9px;
`;
