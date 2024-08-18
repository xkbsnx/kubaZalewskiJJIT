import { styled, ButtonBase, Box, Button } from "@mui/material";

export const StyledButton = styled(Button)<{ buttontype: "primary" | "soft" }>`
  border-radius: 2px;
  padding: 8px 25px;
  width: fit-content;
  background: ${({ buttontype, theme }) =>
    buttontype === "primary"
      ? theme.palette.primary_.primary
      : theme.palette.grey_.grey_400};

  color: ${({ theme, buttontype }) =>
    buttontype === "primary" ? "#ffffff" : theme.palette.grey_.grey_100};

  &:hover {
    background: ${({ buttontype, theme }) =>
      buttontype === "primary"
        ? theme.palette.primary_.primary_dark
        : theme.palette.grey_.grey_300};
  }

  &:focus {
    box-shadow: 0px 0px 0px 4px #9747ff40;
  }
`;
