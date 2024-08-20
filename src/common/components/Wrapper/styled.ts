import { Box, styled } from "@mui/material";

export const AppWrapper = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled(Box)`
  width: 100%;
  max-width: 544px;
  height: auto;
  border: ${({ theme }) => `1px solid ${theme.palette.grey_.grey_400}`};
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
`;
