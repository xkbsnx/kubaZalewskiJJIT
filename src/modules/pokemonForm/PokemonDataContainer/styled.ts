import { styled, Box } from "@mui/material";

export const PokemonDataContainerStyled = styled(Box)`
  width: 100%;
  height: 254px;
  border: ${({ theme }) => `1px solid ${theme.palette.grey_.grey_400}`};
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
