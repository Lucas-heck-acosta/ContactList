import { useDispatch, useSelector } from 'react-redux'
import CardFilter from '../../components/FilterCard'
import { TextInput } from '../../styles'
import * as enums from '../../utils/enums/Group'
import { Aside, Filters } from './styles'
import { searchTerm } from '../../store/reducers/filter'
import { RootReducer } from '../../store'

const SideBar = () => {
  const { term } = useSelector((state: RootReducer) => state.filter)

  const dispatch = useDispatch()
  return (
    <Aside>
      <TextInput
        type="text"
        placeholder="Search"
        value={term}
        onChange={(event) => dispatch(searchTerm(event.target.value))}
      />
      <Filters>
        <CardFilter group={enums.Group.ALL} />
        <CardFilter group={enums.Group.FAMILY} />
        <CardFilter group={enums.Group.FRIENDS} />
        <CardFilter group={enums.Group.WORK} />
      </Filters>
    </Aside>
  )
}

export default SideBar
