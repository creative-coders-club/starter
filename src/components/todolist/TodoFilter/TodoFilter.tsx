import { MouseEvent } from 'react';

import * as S from './TodoFilter.styles';

type TodoFilterProps = {
  filter: Filter;
  onChangeFilter: (filter: Filter) => void;
};

const filters = ['ALL', 'TODO', 'DONE'] as const;

export function TodoFilter({ filter, onChangeFilter }: TodoFilterProps) {
  const handleClickFilter = (e: MouseEvent<HTMLLIElement>) => {
    const filter = e.currentTarget.dataset.filter as Filter;
    onChangeFilter(filter);
  };

  return (
    <S.Filters>
      {filters.map((_filter) => (
        <S.FilterItem
          key={_filter}
          data-filter={_filter}
          onClick={handleClickFilter}
          className={filter === _filter ? 'active' : ''}
        >
          {_filter}
        </S.FilterItem>
      ))}
    </S.Filters>
  );
}

export default TodoFilter;
