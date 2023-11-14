import { useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import { MainContainer } from '../../styles'
import { Grid } from './styles'
import { RootReducer } from '../../store'
import AddButton from '../../components/AddButton'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)
  const { term, group } = useSelector((state: RootReducer) => state.filter)

  const filterContacts = () => {
    let filteredContacts = itens
    if (term != undefined) {
      console.log('b')

      filteredContacts = filteredContacts.filter(
        (item) => item.name.toLowerCase().search(term.toLowerCase()) >= 0
      )

      if (group && group !== 'all') {
        console.log('a')
        filteredContacts = filteredContacts.filter(
          (item) => item.group === group
        )
      }
      return filteredContacts
    } else {
      return itens
    }
  }
  const contacts = filterContacts()
  return (
    <MainContainer>
      <Grid>
        {contacts.map((c) => (
          <Contact
            id={c.id}
            key={c.email}
            name={c.name}
            phone={c.phone}
            email={c.email}
            group={c.group}
          />
        ))}
        <AddButton />
      </Grid>
    </MainContainer>
  )
}

export default ContactList
