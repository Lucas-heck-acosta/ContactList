import Contact from '../../components/Contact'
import { MainContainer } from '../../styles'
import { Grid } from './styles'

const defaultCards = [
  {
    name: 'Mom',
    phone: '123-456-7890',
    email: 'mom@example.com'
  },
  {
    name: 'Dad',
    phone: '122-050-8945',
    email: 'dad@example.com'
  }
]
const ContactList = () => (
  <MainContainer>
    <Grid>
      {defaultCards.map((c) => (
        <Contact key={c.email} name={c.name} phone={c.phone} email={c.email} />
      ))}
    </Grid>
  </MainContainer>
)

export default ContactList
