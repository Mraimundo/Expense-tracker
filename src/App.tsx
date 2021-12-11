import { useState, useEffect } from 'react';
import { Item } from './types/Item';
import { Category } from './types/Categories';
import { categories } from './data/categories';
import { items } from './data/items';

import { filterListByMonth, getCurrentMonth } from './util/dataFilter';

import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { GlobalStyle } from "./styles/global";

import * as S from './App.styles';

export const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);



  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCout = 0;
    let expenseCout = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category]?.expense) {
        expenseCout += filteredList[i].value;
      } else {
        incomeCout += filteredList[i].value;
      }
    }

    setIncome(incomeCout);
    setExpense(expenseCout);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <>
      <S.Container>
        <S.Header>
          <S.HeaderText>Sistema Financeiro</S.HeaderText>
        </S.Header>
        <S.Body>
          <InfoArea
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
            income={income}
            expense={expense}
          />
          <TableArea list={filteredList} />
        </S.Body>
      </S.Container>
      < GlobalStyle />
    </>
  );
}

