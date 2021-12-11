import { Item } from '../../types/Item';
import { categories } from '../../data/categories';
import { formatDate } from '../../util/dataFilter';
import * as S from './styles';

type Props = {
  item: Item
}
export const TableItem = ({ item }: Props) => {
  return (
    <S.TableLine>
      <S.TableColumn>{formatDate(item.date)}</S.TableColumn>
      <S.TableColumn>
        <S.Category color={categories[item.category]?.color}>
          {categories[item.category]?.title}
        </S.Category>
      </S.TableColumn>
      <S.TableColumn>{item.title}</S.TableColumn>
      <S.TableColumn>
        <S.Value color={categories[item.category]?.expense ? 'red' : 'green'}>
          R$ {item.value}
        </S.Value>
      </S.TableColumn>
    </S.TableLine>
  )
}