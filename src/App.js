import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

const App = () => {

  const user = {
    name: "Jack",
    lastname: "Cruzado"
  }

  return (
    <>
      <NavBar/>
      <ItemListContainer user={user}/>
    </>
  )
}

export default App