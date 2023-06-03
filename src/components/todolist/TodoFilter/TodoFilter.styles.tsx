import styled from '@emotion/styled';

import theme from 'src/styles/theme';

export const Filters = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const FilterItem = styled.li`
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  color: ${theme.color.G8};
  cursor: pointer;
  &.active {
    color: ${theme.color.primary};
  }
`;
