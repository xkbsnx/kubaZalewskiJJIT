import { Box, styled } from "@mui/material";

export const ModalContentWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 64px;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  border-radius: 6px;
  background: ${({ theme }) => theme.palette.grey_.grey_300};
`;
