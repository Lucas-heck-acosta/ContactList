import ContactList from './containers/ContactList'
import SideBar from './containers/SideBar'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <ContactList />
      </Container>
    </>
  )
}

export default App
