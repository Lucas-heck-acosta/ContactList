import * as S from './styles'
import * as enums from '../../utils/enums/Group'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../store/reducers/filter'
import { RootReducer } from '../../store'

export type Props = {
  group:
    | enums.Group.ALL
    | enums.Group.FAMILY
    | enums.Group.FRIENDS
    | enums.Group.WORK
}
const CardFilter = ({ group }: Props) => {
  const dispatch = useDispatch()
  const { filter, contacts } = useSelector((state: RootReducer) => state)
  const isActive = () => {
    return filter.group === group
  }
  const filterCard = () => {
    dispatch(
      changeFilter({
        group
      })
    )
  }
  const count = () => {
    if (group === enums.Group.ALL) {
      return contacts.itens.length
    } else {
      const filteredContacts = contacts.itens.filter(
        (contact) => contact.group === group
      )
      return filteredContacts.length
    }
  }
  const counter = count()
  const active = isActive()
  return (
    <S.Card active={active} onClick={filterCard}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{group}</S.Label>
    </S.Card>
  )
}

export default CardFilter
