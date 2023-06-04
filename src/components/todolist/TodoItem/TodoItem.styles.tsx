import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FaTrash } from 'react-icons/fa';

import theme from 'src/styles/theme';

export const Wrapper = styled.div<{ $isOver: boolean }>`
  ${({ $isOver }) =>
    $isOver &&
    css`
      &::before {
        content: '';
        display: block;
        border-top: 3px solid ${theme.color.primary};
      }
    `}
`;

export const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;

  background-color: ${theme.color.G3_5};
  border-radius: 0.5rem;
  padding: 1rem;

  color: ${theme.color.G8};
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;

  cursor: pointer;
  &:hover svg {
    visibility: visible;
  }

  &.active {
    text-decoration-line: line-through;
    color: ${theme.color.G5};
  }
`;

export const TrashIcon = styled(FaTrash)`
  visibility: hidden;
  cursor: pointer;
  color: ${theme.color.G6};
  &:hover {
    color: ${theme.color.secondary};
  }
`;

export const Line = styled.div`
  border: 2px solid ${theme.color.primary};
`;
