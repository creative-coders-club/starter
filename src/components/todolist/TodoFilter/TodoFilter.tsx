import { MouseEvent } from 'react';

import { Filter } from 'src/App';

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
      {/* 커버리지 100% */}
      {/* {filters.map((_filter) => (
        <S.FilterItem
          key={_filter}
          data-filter={_filter}
          onClick={handleClickFilter}
          className={filter === _filter ? 'active' : ''}
        >
          {_filter}
        </S.FilterItem>
      ))} */}
      <S.FilterItem data-filter="ALL" onClick={handleClickFilter} className={filter === 'ALL' ? 'active' : ''}>
        ALL
      </S.FilterItem>
      <S.FilterItem data-filter="TODO" onClick={handleClickFilter} className={filter === 'TODO' ? 'active' : ''}>
        TODO
      </S.FilterItem>
      <S.FilterItem data-filter="DONE" onClick={handleClickFilter} className={filter === 'DONE' ? 'active' : ''}>
        DONE
      </S.FilterItem>
    </S.Filters>
  );
}

export default TodoFilter;
