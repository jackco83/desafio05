import ItemCount from "./ItemCount"

const itemListcontainer = (props) => {
  return (
    <>
      <h2 className="title">Bienvenido, {props.user.name + " " + props.user.lastname}</h2>
      <ItemCount stock={10} inicial={1}/>
    </>
  )
}

export default itemListcontainer