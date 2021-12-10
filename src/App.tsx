import { useState, useEffect } from 'react';
import { Item } from './types/Item';
import { Category } from './types/Categories';
import { categories } from './data/categories';
import { items } from './data/items';

import { filterListByMonth, getCurrentMonth } from './util/dataFilter';


import { GlobalStyle } from "./styles/global";

import * as S from './App.styles';

export const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <>
      <S.Container>
        <S.Header>
          <S.HeaderText>Sistema Financeiro</S.HeaderText>
        </S.Header>
        <S.Body>
          ...
        </S.Body>
      </S.Container>
      < GlobalStyle />
    </>
  );
}

