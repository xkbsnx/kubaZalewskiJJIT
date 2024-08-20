import { styled, Box } from "@mui/material";

export const PokemonDataContainerStyled = styled(Box)`
  width: 100%;
  height: 254px;
  border: ${({ theme }) => `1px solid ${theme.palette.grey_.grey_400}`};
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const PokemonInfoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PokemonTypeBullet = styled(Box)`
  width: fit-content;
  height: 28px;
  border-radius: 16px;
  background: ${({ theme }) => theme.palette.primary_.primary_light};
  padding: 4px 8px;
`;
