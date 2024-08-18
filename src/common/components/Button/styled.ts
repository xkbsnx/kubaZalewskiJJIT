import { styled, ButtonBase, Box, Button } from "@mui/material";

export const StyledButton = styled(Button)<{ buttonType: "primary" | "soft" }>`
  border-radius: 2px;
  padding: 8px 25px;
  width: fit-content;
  background: ${({ buttonType, theme }) =>
    buttonType === "primary"
      ? theme.palette.primary_.primary
      : theme.palette.grey_.grey_400};

  color: ${({ theme, buttonType }) =>
    buttonType === "primary" ? "#ffffff" : theme.palette.grey_.grey_100};

  &:hover {
    background: ${({ buttonType, theme }) =>
      buttonType === "primary"
        ? theme.palette.primary_.primary_dark
        : theme.palette.grey_.grey_300};
  }

  &:focus {
    box-shadow: 0px 0px 0px 4px #9747ff40;
  }
`;
